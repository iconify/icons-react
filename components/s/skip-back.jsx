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
		"content": `<style>.c8w6tnbxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.246 6.927l-5.198 3.639a1.75 1.75 0 0 0 0 2.868l5.198 3.639A1.75 1.75 0 0 0 19 15.639V8.361a1.75 1.75 0 0 0-2.754-1.434M5 5v14");
}
</style><path class="c8w6tnbxz"/>`,
		"fallback": "uix:skip-back",
	});
}

export default Component;
