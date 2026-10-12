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

.vf2nb029q {
  d: path("M9.25 8.75H11a1.5 1.5 0 0 1 1.5 1.5v3.25H7.75v-3.25a1.5 1.5 0 0 1 1.5-1.5m6.25-1v.75m0 3v1m0 3v.75");
}

.vt-6m1bxl {
  d: path("M2.75 7.75a2 2 0 0 1 2-2h14.5a2 2 0 0 1 2 2V9.5a2.5 2.5 0 0 0 0 5v1.75a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2V14.5a2.5 2.5 0 0 0 0-5Z");
}
</style><g class="hntgybcog"><path class="vt-6m1bxl"/><path class="vf2nb029q"/></g>`,
		"fallback": "iconoven:train-ticket",
	});
}

export default Component;
