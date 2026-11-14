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

.na5ya-yuf {
  d: path("m9.75 7.5l1.329-1.034a1.5 1.5 0 0 1 1.842 0L14.25 7.5a.978.978 0 0 1-.6 1.75h-3.3a.978.978 0 0 1-.6-1.75M8 12.5h8m-8 3h8m-8 3h4");
}

.o72zbacef {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5");
}
</style><g class="hntgybcog"><path class="o72zbacef"/><path class="na5ya-yuf"/></g>`,
		"fallback": "uix:statement-bank-letter",
	});
}

export default Component;
