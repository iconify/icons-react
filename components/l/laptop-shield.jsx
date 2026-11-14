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
		"content": `<style>.guvqp3f2r {
  d: path("M7.125 4.5h9.75A2.625 2.625 0 0 1 19.5 7.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 12.875v-5.75A2.625 2.625 0 0 1 7.125 4.5M2.5 18.5h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgw2ohw9i {
  d: path("m12 6.5l3 1V10c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V7.5Z");
}
</style><g class="hntgybcog"><path class="guvqp3f2r"/><path class="wgw2ohw9i"/></g>`,
		"fallback": "uix:laptop-shield",
	});
}

export default Component;
