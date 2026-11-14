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
		"content": `<style>.d992em84i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h1c1-9 6.5-9 7.5 0h1.5c.75-5.5 3.75-5.5 4.5 0h.5c.5-2.75 3-2.75 3.5 0h.5M4 16q2.5-1.5 5 0t5 0t5 0M7 20q2.5-1.5 5 0t5 0");
}
</style><path class="d992em84i"/>`,
		"fallback": "uix:islands-archipelago",
	});
}

export default Component;
