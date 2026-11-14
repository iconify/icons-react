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

.o72zbacef {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5");
}

.vcv8tlbss {
  d: path("M9 5.5h6A1.5 1.5 0 0 1 16.5 7v.5A1.5 1.5 0 0 1 15 9H9a1.5 1.5 0 0 1-1.5-1.5V7A1.5 1.5 0 0 1 9 5.5m-1.25 8h3M9.25 12v3m4-1.5h3m-7 4.5h.01m5.49 0h.01");
}
</style><g class="hntgybcog"><path class="o72zbacef"/><path class="vcv8tlbss"/></g>`,
		"fallback": "uix:service-calculator-hub",
	});
}

export default Component;
