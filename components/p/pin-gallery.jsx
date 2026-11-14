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
		"content": `<style>.abpufxbpi {
  d: path("M4.75 8h14.5A1.75 1.75 0 0 1 21 9.75v9.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25v-9.5A1.75 1.75 0 0 1 4.75 8M7.5 8L12 3.5L16.5 8");
}

.ezc_z5bls {
  d: path("m6.5 18l4-4.5l4 4.5m1-6h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="abpufxbpi"/><path class="ezc_z5bls"/></g>`,
		"fallback": "uix:pin-gallery",
	});
}

export default Component;
