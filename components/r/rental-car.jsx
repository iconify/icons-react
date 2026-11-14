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
		"content": `<style>.ej99tzbnw {
  d: path("M5 18a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m11 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M5 11l2-4h5l1 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ita0dsbvn {
  d: path("M2.5 17v-6H13l3 3h5v3Z");
}
</style><g class="hntgybcog"><path class="ita0dsbvn"/><path class="ej99tzbnw"/></g>`,
		"fallback": "uix:rental-car",
	});
}

export default Component;
