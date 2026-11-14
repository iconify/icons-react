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
		"content": `<style>.c8d2p22ma {
  d: path("M5 7.5h14L20.5 21h-17Zm-.5-3h15m-7.5 0v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ub6k34ain {
  d: path("M8 14.25a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0v-4");
}
</style><g class="hntgybcog"><path class="c8d2p22ma"/><path class="ub6k34ain"/></g>`,
		"fallback": "uix:tare-scale",
	});
}

export default Component;
