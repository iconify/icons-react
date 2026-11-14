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
		"content": `<style>.b2hg_1cxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.928 3h12.144a1.75 1.75 0 0 1 1.66 2.303l-.833 2.5A1.75 1.75 0 0 1 17.239 9H6.761a1.75 1.75 0 0 1-1.66-1.197l-.833-2.5A1.75 1.75 0 0 1 5.928 3M10 3v18m4-18v18m-7 0h10");
}
</style><path class="b2hg_1cxj"/>`,
		"fallback": "uix:race-control",
	});
}

export default Component;
