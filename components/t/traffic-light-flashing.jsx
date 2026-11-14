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
		"content": `<style>.d-5ofw8gj {
  d: path("M11.875 2h.25A4.375 4.375 0 0 1 16.5 6.375v11.25A4.375 4.375 0 0 1 12.125 22h-.25A4.375 4.375 0 0 1 7.5 17.625V6.375A4.375 4.375 0 0 1 11.875 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k72lg3a1g {
  fill: currentColor;
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.oz8koqb3k {
  d: path("M10.5 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.wk_993h_e {
  d: path("M10.5 17.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-8-8.25l2.25 1m-2.25 4l2.25-1m16.75-4l-2.25 1m2.25 4l-2.25-1");
}
</style><g class="hntgybcog"><path class="d-5ofw8gj"/><path class="oz8koqb3k"/><path class="k72lg3a1g"/><path class="wk_993h_e"/></g>`,
		"fallback": "uix:traffic-light-flashing",
	});
}

export default Component;
