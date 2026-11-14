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
		"content": `<style>.b4wbcmbvh {
  d: path("M7.5 6.75L5.25 9l2.25 2.25m3-4.5L12.75 9l-2.25 2.25m8-2.75h.5a2 2 0 0 1 2 2v.5m0 3v1.5m0 3v.5a2 2 0 0 1-2 2h-.5m-3 0H14m-3 0h-.5a2 2 0 0 1-2-2v-.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9st7-jfc {
  d: path("M6.875 2.5h4.25A4.375 4.375 0 0 1 15.5 6.875v4.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 2.5 11.125v-4.25A4.375 4.375 0 0 1 6.875 2.5");
}
</style><g class="hntgybcog"><path class="x9st7-jfc"/><path class="b4wbcmbvh"/></g>`,
		"fallback": "uix:shadow-dom",
	});
}

export default Component;
