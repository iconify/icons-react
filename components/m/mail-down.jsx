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

.k_ji0cbtm {
  d: path("M4.5 4h13a2 2 0 0 1 2 2v5.5H14l-3 5v.5H4.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2");
}

.m84tz8w2r {
  d: path("m6 7.5l5 3.5l5-3.5m2 7.5v6m-2.5-2.5L18 21l2.5-2.5");
}
</style><g class="hntgybcog"><path class="k_ji0cbtm"/><path class="m84tz8w2r"/></g>`,
		"fallback": "uix:mail-down",
	});
}

export default Component;
