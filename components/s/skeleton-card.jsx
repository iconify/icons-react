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

.m13c-rb1n {
  fill: currentColor;
  d: path("M7.75 6.5h.5A1.75 1.75 0 0 1 10 8.25v.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 6 8.75v-.5A1.75 1.75 0 0 1 7.75 6.5");
}

.u0cfjfaql {
  d: path("M6 13.5h12m-12 4h7");
}

.yd-ecgb4e {
  d: path("M6.5 3.5h11A3.5 3.5 0 0 1 21 7v10a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17V7a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="yd-ecgb4e"/><path class="m13c-rb1n"/><path class="u0cfjfaql"/></g>`,
		"fallback": "uix:skeleton-card",
	});
}

export default Component;
