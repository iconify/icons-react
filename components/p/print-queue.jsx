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

.n7_x_c0ff {
  d: path("M7 17H5.5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H17v-3H7Zm-1-7V6.25h9.5V10");
}

.xju9spb3m {
  d: path("M9 6.25V3h9.5v7m-9.75 4h6.5A1.75 1.75 0 0 1 17 15.75v3.5A1.75 1.75 0 0 1 15.25 21h-6.5A1.75 1.75 0 0 1 7 19.25v-3.5A1.75 1.75 0 0 1 8.75 14");
}
</style><g class="hntgybcog"><path class="n7_x_c0ff"/><path class="xju9spb3m"/></g>`,
		"fallback": "uix:print-queue",
	});
}

export default Component;
