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

.kghz3ibyd {
  d: path("M11.25 11h1.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 12.75 15h-1.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 11.25 11m-.75 0V9.75a1.5 1.5 0 0 1 3 0V11");
}

.qp_5ugzmh {
  d: path("M8.375 2.5h7.25A4.375 4.375 0 0 1 20 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-7.25A4.375 4.375 0 0 1 4 17.125V6.875A4.375 4.375 0 0 1 8.375 2.5m2.125 16h3");
}
</style><g class="hntgybcog"><path class="qp_5ugzmh"/><path class="kghz3ibyd"/></g>`,
		"fallback": "uix:tablet-lock",
	});
}

export default Component;
