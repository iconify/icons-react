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

.iuxl_9bdu {
  d: path("M6 16.5h10.5a3 3 0 0 0 0-6H8a2 2 0 0 0 0 4h7");
}

.sc9ctsbop {
  d: path("M2.5 2.5h19M7 2.5V7m10-4.5V7M6 7h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 20H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 7");
}
</style><g class="hntgybcog"><path class="sc9ctsbop"/><path class="iuxl_9bdu"/></g>`,
		"fallback": "uix:stationery-aisle",
	});
}

export default Component;
