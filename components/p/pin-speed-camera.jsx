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

.njavl4xsm {
  d: path("m16.569 5.179l2-.6A1.5 1.5 0 0 1 20.5 6.016v2.968a1.5 1.5 0 0 1-1.931 1.437l-2-.6A1.5 1.5 0 0 1 15.5 8.384V6.616a1.5 1.5 0 0 1 1.069-1.437M9.5 11v10.5m-3.5 0h7");
}

.ps3_5wbku {
  d: path("M6.125 4h6.75A2.625 2.625 0 0 1 15.5 6.625v1.75A2.625 2.625 0 0 1 12.875 11h-6.75A2.625 2.625 0 0 1 3.5 8.375v-1.75A2.625 2.625 0 0 1 6.125 4");
}

.ya8y-26kf {
  fill: currentColor;
  d: path("M7 7.5h.01");
}
</style><g class="hntgybcog"><path class="ps3_5wbku"/><path class="njavl4xsm"/><path class="ya8y-26kf"/></g>`,
		"fallback": "uix:pin-speed-camera",
	});
}

export default Component;
