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

.iflxnubtr {
  d: path("m9 14.5l-2 7l5-3l5 3l-2-7");
}

.u9wuy_bfq {
  d: path("m12 2.75l3.5 1V12a3.5 3.5 0 0 1-7 0V3.75Z");
}
</style><g class="hntgybcog"><path class="u9wuy_bfq"/><path class="iflxnubtr"/></g>`,
		"fallback": "uix:sale-ribbon",
	});
}

export default Component;
