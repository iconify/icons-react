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

.mg4bww1ud {
  d: path("M9 17V7h3.5a3 3 0 0 1 0 6H9");
}

.z2_8lybtw {
  d: path("M9.125 3h5.75A6.125 6.125 0 0 1 21 9.125v5.75A6.125 6.125 0 0 1 14.875 21h-5.75A6.125 6.125 0 0 1 3 14.875v-5.75A6.125 6.125 0 0 1 9.125 3");
}
</style><g class="hntgybcog"><path class="z2_8lybtw"/><path class="mg4bww1ud"/></g>`,
		"fallback": "uix:pin-parking",
	});
}

export default Component;
