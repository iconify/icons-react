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
		"content": `<style>.gaguh6bjs {
  d: path("M7.5 10.5h9A1.5 1.5 0 0 1 18 12v.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 12.5V12a1.5 1.5 0 0 1 1.5-1.5M6 16.75h4.5m3 0H18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vuej4ybvt {
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v7.25A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-7.25A4.375 4.375 0 0 1 6.875 4M2.5 7.75h19");
}
</style><g class="hntgybcog"><path class="vuej4ybvt"/><path class="gaguh6bjs"/></g>`,
		"fallback": "uix:landing-page-hero",
	});
}

export default Component;
