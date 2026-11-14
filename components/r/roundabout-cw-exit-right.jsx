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
		"content": `<style>.e3x6pq0mc {
  d: path("M10 21.5v-5a5.5 5.5 0 1 1 5.5-5.5h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xx1tbu30f {
  d: path("M18.25 8.75L20.5 11l-2.25 2.25M10 16.5a5.5 5.5 0 0 0 5.5-5.5M8 3.5l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="e3x6pq0mc"/><path class="xx1tbu30f"/></g>`,
		"fallback": "uix:roundabout-cw-exit-right",
	});
}

export default Component;
