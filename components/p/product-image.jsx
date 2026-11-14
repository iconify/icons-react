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
		"content": `<style>.g2wbmqbry {
  d: path("M7.375 4h9.25A4.375 4.375 0 0 1 21 8.375v7.25A4.375 4.375 0 0 1 16.625 20h-9.25A4.375 4.375 0 0 1 3 15.625v-7.25A4.375 4.375 0 0 1 7.375 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pisne1bvf {
  d: path("M14.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M3 17l5-5l4 4l2.5-2.5L21 20");
}
</style><g class="hntgybcog"><path class="g2wbmqbry"/><path class="pisne1bvf"/></g>`,
		"fallback": "uix:product-image",
	});
}

export default Component;
