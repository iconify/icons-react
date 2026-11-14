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
		"content": `<style>.d5wrr8bsi {
  d: path("M6.25 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M9.5 10.5c0-7 8.5-8 8.75-3m0 0l1.25 13m-3 0h5M16.25 17h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-4fr2o1x {
  d: path("M2.5 17.5v-3a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v3Z");
}
</style><g class="hntgybcog"><path class="z-4fr2o1x"/><path class="d5wrr8bsi"/></g>`,
		"fallback": "uix:litter-vacuum",
	});
}

export default Component;
