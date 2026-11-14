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
		"content": `<style>.d2g9hhr1o {
  d: path("M13.5 19L12 20.5l1.5 1.5m-5.75-2.639A8.5 8.5 0 0 1 12 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k2uykjb4h {
  d: path("M13.5 10.25q-.375-.75-1.5-.75c-.9 0-1.5.5-1.5 1.25c0 1.5 3 1 3 2.5c0 .75-.6 1.25-1.5 1.25c-.75 0-1.3-.3-1.5-.75m5.75-9.111A8.5 8.5 0 0 1 12 20.5");
}

.tm--wybug {
  d: path("M6.75 12a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0");
}

.ub68ubbxf {
  d: path("M10.5 2L12 3.5L10.5 5");
}
</style><g class="hntgybcog"><path class="tm--wybug"/><path class="k2uykjb4h"/><path class="d2g9hhr1o"/><path class="ub68ubbxf"/></g>`,
		"fallback": "uix:recurring-revenue",
	});
}

export default Component;
