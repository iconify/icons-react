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

.kfk2zn8hp {
  d: path("M4.5 10v7a7.5 2.5 0 0 0 15 0v-7M8 7.75l8.5-5.25M16 7.75L7.5 2.5");
}

.nr9yd8biv {
  d: path("M4.5 10a7.5 2.5 0 1 0 15 0a7.5 2.5 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="nr9yd8biv"/><path class="kfk2zn8hp"/></g>`,
		"fallback": "uix:toy-drum",
	});
}

export default Component;
