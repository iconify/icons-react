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

.uq4r9qq-h {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5M8 6.5h8");
}

.w21dwcc-k {
  d: path("m10 11l-2.25 2.75L10 16.5m4-5.5l2.25 2.75L14 16.5m-1.25-6l-1.5 6.5");
}
</style><g class="hntgybcog"><path class="uq4r9qq-h"/><path class="w21dwcc-k"/></g>`,
		"fallback": "uix:treasury-iso20022",
	});
}

export default Component;
