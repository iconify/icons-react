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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i09y49brx {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125V6.875A4.375 4.375 0 0 1 9.875 2.5M9 6.5h6");
}

.k25w0_ngn {
  d: path("M10.75 9.5h2.5A1.75 1.75 0 0 1 15 11.25v1A1.75 1.75 0 0 1 13.25 14h-2.5A1.75 1.75 0 0 1 9 12.25v-1a1.75 1.75 0 0 1 1.75-1.75m-.75 8h4");
}
</style><g class="hntgybcog"><path class="i09y49brx"/><path class="k25w0_ngn"/></g>`,
		"fallback": "uix:landing-page-mobile",
	});
}

export default Component;
