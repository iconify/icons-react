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
		"content": `<style>.a1ki2fb0s {
  d: path("M5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-13 3v2h19v-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.idc18cb7m {
  d: path("M5.125 3.5h6.75A2.625 2.625 0 0 1 14.5 6.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 2.5 11.875v-5.75A2.625 2.625 0 0 1 5.125 3.5m9.375 3h4l3 3.5v4.5h-7");
}
</style><g class="hntgybcog"><path class="idc18cb7m"/><path class="a1ki2fb0s"/></g>`,
		"fallback": "uix:parking-bay-loading",
	});
}

export default Component;
