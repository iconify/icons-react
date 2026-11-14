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
		"content": `<style>.c57a8o-tr {
  d: path("m16.5 14.25l-2 2l2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u-xgqsjqc {
  d: path("M2.5 11h19M4 11v10.5h14.7m1.3-8V11M4 18.5h8.8m-5.05-14h3.5A1.75 1.75 0 0 1 13 6.25v3A1.75 1.75 0 0 1 11.25 11h-3.5A1.75 1.75 0 0 1 6 9.25v-3A1.75 1.75 0 0 1 7.75 4.5m1.75 0V7m12 14.25v-2.5a2.5 2.5 0 0 0-2.5-2.5h-4.5");
}
</style><g class="hntgybcog"><path class="u-xgqsjqc"/><path class="c57a8o-tr"/></g>`,
		"fallback": "uix:returns-desk",
	});
}

export default Component;
