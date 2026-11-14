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
		"content": `<style>.gcwmdebsk {
  d: path("M6.5 6h11A3.5 3.5 0 0 1 21 9.5v5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 14.5v-5A3.5 3.5 0 0 1 6.5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.op-p4mzpp {
  d: path("M7.75 8.5zA1.25 1.25 0 0 1 9 9.75v4.5a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25v-4.5A1.25 1.25 0 0 1 7.75 8.5m4.25 0za1.25 1.25 0 0 1 1.25 1.25v4.5A1.25 1.25 0 0 1 12 15.5a1.25 1.25 0 0 1-1.25-1.25v-4.5A1.25 1.25 0 0 1 12 8.5m4.25 0za1.25 1.25 0 0 1 1.25 1.25v4.5a1.25 1.25 0 0 1-1.25 1.25A1.25 1.25 0 0 1 15 14.25v-4.5a1.25 1.25 0 0 1 1.25-1.25");
}
</style><g class="hntgybcog"><path class="gcwmdebsk"/><path class="op-p4mzpp"/></g>`,
		"fallback": "uix:switch-dip",
	});
}

export default Component;
