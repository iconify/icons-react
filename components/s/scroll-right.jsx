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

.vvif_vmck {
  d: path("M4 7.5v-2a2.5 2.5 0 0 1 5 0V21h8.5a2 2 0 0 0 2-2V3h-13M4 7.5h5m2.75 4.5h5");
}

.z_w_9z0nn {
  d: path("m14.25 9.5l2.5 2.5l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="vvif_vmck"/><path class="z_w_9z0nn"/></g>`,
		"fallback": "uix:scroll-right",
	});
}

export default Component;
