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

.r1_m_4bht {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-1.5 12v-2c0-2 2-4 4.5-4s4.5 2 4.5 4v2");
}
</style><g class="hntgybcog"><path class="o72zbacef"/><path class="r1_m_4bht"/></g>`,
		"fallback": "uix:portrait-mode",
	});
}

export default Component;
