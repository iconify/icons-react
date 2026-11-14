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
		"content": `<style>.fyhqs1e1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h14M6.5 13L12 7.5l5.5 5.5m-11 6l5.5-5.5l5.5 5.5");
}
</style><path class="fyhqs1e1y"/>`,
		"fallback": "uix:scroll-to-top",
	});
}

export default Component;
