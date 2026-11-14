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
		"content": `<style>.dw5zqob7k {
  d: path("M9.75 7.25h4.5a1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-1.5 1.5h-4.5a1.5 1.5 0 0 1-1.5-1.5v-2.5a1.5 1.5 0 0 1 1.5-1.5M9 15.5h.01m2.99 0h.01m2.99 0h.01M9 18.5h.01m2.99 0h.01m2.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lv2eq1bnq {
  d: path("M9.875 4.5h4.25A4.375 4.375 0 0 1 18.5 8.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125v-8.25A4.375 4.375 0 0 1 9.875 4.5m-.375 0v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1");
}
</style><g class="hntgybcog"><path class="lv2eq1bnq"/><path class="dw5zqob7k"/></g>`,
		"fallback": "uix:pos-mobile-handheld",
	});
}

export default Component;
