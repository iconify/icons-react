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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.tzbs90boy {
  d: path("M2.5 11.5H8l2 4h4l2-4h5.5m-9.5 4v6");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="tzbs90boy"/></g>`,
		"fallback": "uix:pin-driving-school",
	});
}

export default Component;
