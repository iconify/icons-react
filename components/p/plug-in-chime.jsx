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
		"content": `<style>.gtkm-lb_f {
  d: path("M9.25 2.5h5.5A5.25 5.25 0 0 1 20 7.75v3.5a5.25 5.25 0 0 1-5.25 5.25h-5.5A5.25 5.25 0 0 1 4 11.25v-3.5A5.25 5.25 0 0 1 9.25 2.5m.25 14V21m5-4.5V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.toyu16stp {
  d: path("M8 13.5c1.25-1 1-2.5 1-3.5a3 3 0 0 1 6 0c0 1-.25 2.5 1 3.5Z");
}
</style><g class="hntgybcog"><path class="gtkm-lb_f"/><path class="toyu16stp"/></g>`,
		"fallback": "uix:plug-in-chime",
	});
}

export default Component;
