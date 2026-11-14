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

.qg8c2gbki {
  d: path("M8.25 7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m0 6.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M14.5 7.5h.01");
}

.tyvd2kp8c {
  d: path("M10.25 2.5h3.5A5.25 5.25 0 0 1 19 7.75v8.5a5.25 5.25 0 0 1-5.25 5.25h-3.5A5.25 5.25 0 0 1 5 16.25v-8.5a5.25 5.25 0 0 1 5.25-5.25");
}
</style><g class="hntgybcog"><path class="tyvd2kp8c"/><path class="qg8c2gbki"/></g>`,
		"fallback": "uix:phone-camera-module",
	});
}

export default Component;
