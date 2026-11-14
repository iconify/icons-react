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

.mbe_rfb0u {
  d: path("M7 5.5h2A1.5 1.5 0 0 1 10.5 7v1A1.5 1.5 0 0 1 9 9.5H7A1.5 1.5 0 0 1 5.5 8V7A1.5 1.5 0 0 1 7 5.5m8 0h2A1.5 1.5 0 0 1 18.5 7v1A1.5 1.5 0 0 1 17 9.5h-2A1.5 1.5 0 0 1 13.5 8V7A1.5 1.5 0 0 1 15 5.5m-9.5 7v3m3-3v3m3-3v3m4 0l5 5m0-5l-5 5");
}

.mefnpx_hg {
  d: path("M5.125 2.5h13.75A2.625 2.625 0 0 1 21.5 5.125v4.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 9.875v-4.75A2.625 2.625 0 0 1 5.125 2.5");
}
</style><g class="hntgybcog"><path class="mefnpx_hg"/><path class="mbe_rfb0u"/></g>`,
		"fallback": "uix:oom-killed",
	});
}

export default Component;
