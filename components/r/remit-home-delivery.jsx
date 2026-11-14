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

.j2auanb4f {
  d: path("M5 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.vj8jz7b0c {
  d: path("M2.75 18a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m13 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-7.5 0h7.5m2.75 0L16 7m-1.75 0h3.5M5.125 4.5h3.75A2.625 2.625 0 0 1 11.5 7.125v2.75A2.625 2.625 0 0 1 8.875 12.5h-3.75A2.625 2.625 0 0 1 2.5 9.875v-2.75A2.625 2.625 0 0 1 5.125 4.5");
}
</style><g class="hntgybcog"><path class="vj8jz7b0c"/><path class="j2auanb4f"/></g>`,
		"fallback": "uix:remit-home-delivery",
	});
}

export default Component;
