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
		"content": `<style>.hjbe7db1q {
  d: path("M5.5 18v-4h7v4m3-5l4.75-6.75M18.5 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M2.5 21h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m7weq_6qb {
  d: path("M3 18h12.5a2.5 2.5 0 0 0 0-5");
}
</style><g class="hntgybcog"><path class="m7weq_6qb"/><path class="hjbe7db1q"/></g>`,
		"fallback": "uix:sled-pulling",
	});
}

export default Component;
