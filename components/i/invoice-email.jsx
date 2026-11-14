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

.qo-c9xb-x {
  d: path("m3 11l9 5.5l9-5.5M9.5 6.5H14");
}

.zge5gfbmi {
  d: path("M6 10h12a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-4.5A3.5 3.5 0 0 1 6 10m.5 0V3.5l1.75-1l1.75 1l1.75-1l1.75 1l1.75-1l1.75 1V10");
}
</style><g class="hntgybcog"><path class="zge5gfbmi"/><path class="qo-c9xb-x"/></g>`,
		"fallback": "uix:invoice-email",
	});
}

export default Component;
