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

.peyj-dbbp {
  d: path("M14.5 15.5v-4a2 2 0 0 0-2-2h-4m2.25-2.25L8.5 9.5l2.25 2.25");
}

.tpnyvdgai {
  d: path("m14.475 4.475l5.05 5.05a3.5 3.5 0 0 1 0 4.95l-5.05 5.05a3.5 3.5 0 0 1-4.95 0l-5.05-5.05a3.5 3.5 0 0 1 0-4.95l5.05-5.05a3.5 3.5 0 0 1 4.95 0");
}
</style><g class="hntgybcog"><path class="tpnyvdgai"/><path class="peyj-dbbp"/></g>`,
		"fallback": "uix:turn-left-ahead",
	});
}

export default Component;
