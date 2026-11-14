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

.hrqpygbiq {
  d: path("M5.125 2.5h6.75A2.625 2.625 0 0 1 14.5 5.125v3.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 2.5 8.875v-3.75A2.625 2.625 0 0 1 5.125 2.5m7 12h6.75a2.625 2.625 0 0 1 2.625 2.625v1.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 9.5 18.875v-1.75a2.625 2.625 0 0 1 2.625-2.625");
}

.wj22xub1h {
  d: path("M5 11.5L8.5 7l3.5 4.5m0 10l3.5-4l3.5 4M14.5 7H18v7.5");
}
</style><g class="hntgybcog"><path class="hrqpygbiq"/><path class="wj22xub1h"/></g>`,
		"fallback": "uix:photo-essay",
	});
}

export default Component;
