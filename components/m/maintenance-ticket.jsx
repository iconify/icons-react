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
		"content": `<style>.enu42nizh {
  d: path("M5 4.5h14a2 2 0 0 1 2 2v3a2.5 2.5 0 0 0 0 5v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2.5 2.5 0 0 0 0-5v-3a2 2 0 0 1 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xbx1hcc_t {
  d: path("M16.5 9.75a2.25 2.25 0 1 1-2-2m-6 8l4.25-4.25");
}
</style><g class="hntgybcog"><path class="enu42nizh"/><path class="xbx1hcc_t"/></g>`,
		"fallback": "uix:maintenance-ticket",
	});
}

export default Component;
