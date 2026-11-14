import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.deq3rubit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 19.5c-5.5-2-7-11-2.5-16c2 2 3.5 4 4.5 5.5l6 1.5l2-4l.25 4.5l2.25 2.5L19 16h-6.5Zm3.5-10l3.75-6.25M14 13h.01");
}
</style><path class="deq3rubit"/>`,
		"fallback": "uix:triceratops",
	});
}

export default Component;
