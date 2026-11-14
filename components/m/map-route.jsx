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
		"content": `<style>.hmc1ueb-x {
  d: path("m4.077 5.551l4.25-1.771a1.75 1.75 0 0 1 1.346 0l4.654 1.94a1.75 1.75 0 0 0 1.346 0l2.904-1.21A1.75 1.75 0 0 1 21 6.125v10.708a1.75 1.75 0 0 1-1.077 1.616l-4.25 1.771a1.75 1.75 0 0 1-1.346 0l-4.654-1.94a1.75 1.75 0 0 0-1.346 0l-2.904 1.21A1.75 1.75 0 0 1 3 17.875V7.167a1.75 1.75 0 0 1 1.077-1.616M9 3.5v6.7M15 6v.7m0 7.1v6.7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ne-225b8l {
  d: path("M6 16c2.5 0 3.5-4 6-4s3.5-3.5 6-3.5");
}
</style><g class="hntgybcog"><path class="hmc1ueb-x"/><path class="ne-225b8l"/></g>`,
		"fallback": "uix:map-route",
	});
}

export default Component;
