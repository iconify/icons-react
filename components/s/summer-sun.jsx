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
		"content": `<style>.r5fidebdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m11.25 2.75l2 1m-2-6.5l2-1m-15.5 6.5l-2 1m2-6.5l-2-1m11.5 10.5l1 2m-6.5-2l-1 2m6.5-15.5l1-2m-6.5 2l-1-2");
}
</style><path class="r5fidebdt"/>`,
		"fallback": "uix:summer-sun",
	});
}

export default Component;
