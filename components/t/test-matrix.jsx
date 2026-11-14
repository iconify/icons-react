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

.rlnpj4-6b {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5M12 2.5v19M2.5 12h19");
}

.w0j9w5b9z {
  d: path("M5.25 7.5L6.75 9l2.5-3.5m6 9.75l3.5 3.5m0-3.5l-3.5 3.5");
}
</style><g class="hntgybcog"><path class="rlnpj4-6b"/><path class="w0j9w5b9z"/></g>`,
		"fallback": "uix:test-matrix",
	});
}

export default Component;
