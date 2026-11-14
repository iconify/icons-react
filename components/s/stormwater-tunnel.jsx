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

.kv23z-bca {
  d: path("M7 16.5v-3a5 5 0 0 1 10 0v3M3 19.75q2-1.5 4 0t4 0t4 0t4 0q1-.75 2 0");
}

.o2k1jl29t {
  d: path("M2.5 16.5V12a9.5 9.5 0 0 1 19 0v4.5");
}
</style><g class="hntgybcog"><path class="o2k1jl29t"/><path class="kv23z-bca"/></g>`,
		"fallback": "uix:stormwater-tunnel",
	});
}

export default Component;
