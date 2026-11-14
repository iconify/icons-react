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

.q-haombgm {
  d: path("M7 14h10v6.5H7Z");
}

.r_0wl0jcl {
  d: path("M7.5 9.5h9A3.5 3.5 0 0 1 20 13v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 14v-1a3.5 3.5 0 0 1 3.5-3.5m-.5 0v-6h10v6");
}
</style><g class="hntgybcog"><path class="r_0wl0jcl"/><path class="q-haombgm"/></g>`,
		"fallback": "uix:policy-print",
	});
}

export default Component;
