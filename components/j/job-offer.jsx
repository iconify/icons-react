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
		"content": `<style>.ak-qd3w6c {
  d: path("M5.125 5h13.75A2.625 2.625 0 0 1 21.5 7.625v8.75A2.625 2.625 0 0 1 18.875 19H5.125A2.625 2.625 0 0 1 2.5 16.375v-8.75A2.625 2.625 0 0 1 5.125 5M2.5 7l7 4.75M21.5 7l-7 4.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lx_kq9ktm {
  d: path("M9.25 13.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="ak-qd3w6c"/><path class="lx_kq9ktm"/></g>`,
		"fallback": "uix:job-offer",
	});
}

export default Component;
