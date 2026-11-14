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
		"content": `<style>.dhb-3bgbm {
  d: path("M11 13V5.5h5V13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tvelquvvb {
  fill: currentColor;
  d: path("m9.25 6.25l-.841.36A1.5 1.5 0 0 0 7.5 7.989V11.5A1.5 1.5 0 0 0 9 13h.5a1.5 1.5 0 0 0 1.5-1.5V7.404A1.255 1.255 0 0 0 9.25 6.25");
}

.wt2m0l7rg {
  d: path("M6.625 3h10.75A2.625 2.625 0 0 1 20 5.625v7.25a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 12.875v-7.25A2.625 2.625 0 0 1 6.625 3M2.5 19.5l1.5-4h16l1.5 4Z");
}
</style><g class="hntgybcog"><path class="wt2m0l7rg"/><path class="dhb-3bgbm"/><path class="tvelquvvb"/></g>`,
		"fallback": "uix:virtual-open-house",
	});
}

export default Component;
