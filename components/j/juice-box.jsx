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

.oiuwbg_wq {
  d: path("M8.125 7.5h5.75a2.625 2.625 0 0 1 2.625 2.625v8.75a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 5.5 18.875v-8.75A2.625 2.625 0 0 1 8.125 7.5M14 7.5V4l4.5-1.5");
}

.tggs3t29j {
  d: path("M11 11.25c1.5 2 2.75 3.5 2.75 4.75a2.75 2.75 0 0 1-5.5 0c0-1.25 1.25-2.75 2.75-4.75");
}
</style><g class="hntgybcog"><path class="oiuwbg_wq"/><path class="tggs3t29j"/></g>`,
		"fallback": "uix:juice-box",
	});
}

export default Component;
