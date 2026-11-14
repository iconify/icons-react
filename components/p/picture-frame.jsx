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

.os3_2y-hp {
  d: path("M5.625 6.5h12.75A2.625 2.625 0 0 1 21 9.125v8.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 17.875v-8.75A2.625 2.625 0 0 1 5.625 6.5M8 6.5l4-4l4 4");
}

.x3r4a_k1u {
  d: path("m3 17l5.5-5.5l4 4l3-3L21 18");
}
</style><g class="hntgybcog"><path class="os3_2y-hp"/><path class="x3r4a_k1u"/></g>`,
		"fallback": "uix:picture-frame",
	});
}

export default Component;
