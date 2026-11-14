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

.hxssifbwx {
  d: path("M10 7.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8.5 13c0-1.75 1.5-2.75 3.5-2.75s3.5 1 3.5 2.75m-4.25-6.75h.01");
}

.qxsbu8bvx {
  d: path("M6.125 3h11.75A2.625 2.625 0 0 1 20.5 5.625v6.75A2.625 2.625 0 0 1 17.875 15H6.125A2.625 2.625 0 0 1 3.5 12.375v-6.75A2.625 2.625 0 0 1 6.125 3M2 18h20");
}
</style><g class="hntgybcog"><path class="qxsbu8bvx"/><path class="hxssifbwx"/></g>`,
		"fallback": "uix:laptop-doctor",
	});
}

export default Component;
