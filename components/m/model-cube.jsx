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

.htbyegbmu {
  d: path("m3.75 7.25l8.25 4.5l8.25-4.5M12 11.75v9.5M7.9 12.7q.29 2.11 2.4 2.4q-2.11.29-2.4 2.4q-.29-2.11-2.4-2.4q2.11-.29 2.4-2.4");
}

.jttk_hb_x {
  d: path("m13.1 3.35l6.05 3.3q1.1.6 1.1 1.85v7q0 1.25-1.1 1.85l-6.05 3.3q-1.1.6-2.2 0l-6.05-3.3q-1.1-.6-1.1-1.85v-7q0-1.25 1.1-1.85l6.05-3.3q1.1-.6 2.2 0");
}
</style><g class="hntgybcog"><path class="jttk_hb_x"/><path class="htbyegbmu"/></g>`,
		"fallback": "iconoven:model-cube",
	});
}

export default Component;
