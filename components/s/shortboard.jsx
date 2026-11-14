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

.q7eexkvah {
  d: path("m14 14l3.5 4.5l-3.75-.5");
}

.w13lzbngb {
  d: path("M10.5 3.5C14.5 8 15 15 13 20.5H8C6 15 6.5 8 10.5 3.5");
}
</style><g class="hntgybcog"><path class="w13lzbngb"/><path class="q7eexkvah"/></g>`,
		"fallback": "uix:shortboard",
	});
}

export default Component;
