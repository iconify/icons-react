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
		"content": `<style>.cvwracdtk {
  d: path("M8.625 10h8.75A2.625 2.625 0 0 1 20 12.625v.75A2.625 2.625 0 0 1 17.375 16h-8.75A2.625 2.625 0 0 1 6 13.375v-.75A2.625 2.625 0 0 1 8.625 10M7.5 10L4 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8jok8bdq {
  d: path("M6.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.5-2l1.5 4l1.5-4l1.5 4l1.5-4");
}
</style><g class="hntgybcog"><path class="cvwracdtk"/><path class="w8jok8bdq"/></g>`,
		"fallback": "uix:lawn-scarifier",
	});
}

export default Component;
