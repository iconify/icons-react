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

.iepfipbmk {
  d: path("M5.5 11a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.qxz3rvbvy {
  d: path("M3 21c1.5-3 2.5-6 2.5-10m-2.25 2.25L5.5 11l2.25 2.25M10.5 11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="iepfipbmk"/><path class="qxz3rvbvy"/></g>`,
		"fallback": "uix:orbit-insertion",
	});
}

export default Component;
