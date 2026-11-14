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

.tpnyvdgai {
  d: path("m14.475 4.475l5.05 5.05a3.5 3.5 0 0 1 0 4.95l-5.05 5.05a3.5 3.5 0 0 1-4.95 0l-5.05-5.05a3.5 3.5 0 0 1 0-4.95l5.05-5.05a3.5 3.5 0 0 1 4.95 0");
}

.uwdo46j-s {
  d: path("M9.5 15.5v-7m-1.75 1.75L9.5 8.5l1.75 1.75M14.5 8.5v7m-1.75-1.75l1.75 1.75l1.75-1.75");
}
</style><g class="hntgybcog"><path class="tpnyvdgai"/><path class="uwdo46j-s"/></g>`,
		"fallback": "uix:two-way-traffic-sign",
	});
}

export default Component;
