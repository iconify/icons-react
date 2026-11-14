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
		"content": `<style>.fz_o3ccxa {
  d: path("M7 11h5.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 13v-.5A1.5 1.5 0 0 1 7 11m2.75 6h.01M16 5.75a2.75 2.75 0 0 1 2.75 2.75M16 3a5.5 5.5 0 0 1 5.5 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sisfnmduw {
  d: path("M6.5 8.5H13a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5H6.5A3.5 3.5 0 0 1 3 16v-4a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="sisfnmduw"/><path class="fz_o3ccxa"/></g>`,
		"fallback": "uix:on-call",
	});
}

export default Component;
