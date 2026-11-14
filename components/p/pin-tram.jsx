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
		"content": `<style>.gokh8k5nx {
  d: path("M9.75 9h4.5A1.75 1.75 0 0 1 16 10.75v2a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 12.75v-2A1.75 1.75 0 0 1 9.75 9M9 2.5h6m-3 0V6M8 19l-1 2.5m9-2.5l1 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_hjrz12u {
  d: path("M9.375 6h5.25A4.375 4.375 0 0 1 19 10.375v4.25A4.375 4.375 0 0 1 14.625 19h-5.25A4.375 4.375 0 0 1 5 14.625v-4.25A4.375 4.375 0 0 1 9.375 6");
}
</style><g class="hntgybcog"><path class="z_hjrz12u"/><path class="gokh8k5nx"/></g>`,
		"fallback": "uix:pin-tram",
	});
}

export default Component;
