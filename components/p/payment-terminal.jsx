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
		"content": `<style>.bsk63qb2q {
  d: path("M10.25 5.5h3.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 8.5 7.75v-.5a1.75 1.75 0 0 1 1.75-1.75M9.5 14h.01M12 14h.01m2.49 0h.01M9.5 17.5h.01m2.49 0h.01m2.49 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwzp73xdl {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5");
}
</style><g class="hntgybcog"><path class="hwzp73xdl"/><path class="bsk63qb2q"/></g>`,
		"fallback": "uix:payment-terminal",
	});
}

export default Component;
