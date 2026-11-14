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
		"content": `<style>.bs259tbbz {
  d: path("M5.125 7h6.75A2.625 2.625 0 0 1 14.5 9.625v4.75A2.625 2.625 0 0 1 11.875 17h-6.75A2.625 2.625 0 0 1 2.5 14.375v-4.75A2.625 2.625 0 0 1 5.125 7m12.125 3.25a2.5 2.5 0 0 1 0 3.5M19.75 8a5 5 0 0 1 0 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0-4f4ccs {
  d: path("m2.5 8.5l6 4l6-4");
}
</style><g class="hntgybcog"><path class="bs259tbbz"/><path class="k0-4f4ccs"/></g>`,
		"fallback": "uix:mailbox-sensor",
	});
}

export default Component;
