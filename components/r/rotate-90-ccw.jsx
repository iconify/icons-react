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
		"content": `<style>.bcubxb6dz {
  d: path("M3.75 11.75L6.5 14.5l2.75-2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p4ghj_wmu {
  d: path("M15 10h2a3.5 3.5 0 0 1 3.5 3.5v2A3.5 3.5 0 0 1 17 19h-2a3.5 3.5 0 0 1-3.5-3.5v-2A3.5 3.5 0 0 1 15 10m-8.5 4.5A9.5 9.5 0 0 1 16 5");
}
</style><g class="hntgybcog"><path class="p4ghj_wmu"/><path class="bcubxb6dz"/></g>`,
		"fallback": "uix:rotate-90-ccw",
	});
}

export default Component;
