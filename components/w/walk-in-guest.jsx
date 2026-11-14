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

.i9pzwibmu {
  d: path("M9.5 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m1 3.5l-2 6l3 3V21m-3-7.5l-2 4l-2.5 3m12.5.5V3.5h5V21");
}

.y_35z-buh {
  d: path("m5.5 11l4-3l4 3.5");
}
</style><g class="hntgybcog"><path class="i9pzwibmu"/><path class="y_35z-buh"/></g>`,
		"fallback": "uix:walk-in-guest",
	});
}

export default Component;
