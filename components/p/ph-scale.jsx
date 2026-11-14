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
		"content": `<style>.lkcfwsc9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12.75h13a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3a3 3 0 0 1 3-3m3.25 0v6m6.5-6v6m-3.392-13.5h.284a1.307 1.307 0 0 1 1.108 2a1.474 1.474 0 0 1-2.5 0a1.307 1.307 0 0 1 1.108-2");
}
</style><path class="lkcfwsc9u"/>`,
		"fallback": "uix:ph-scale",
	});
}

export default Component;
