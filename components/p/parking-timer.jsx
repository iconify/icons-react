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

.k4bitbb0t {
  d: path("M10.25 17.5v-8h2.25a2.25 2.25 0 0 1 0 4.5h-2.25");
}

.ondbm74wj {
  d: path("M4 13.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0m6-11h4m-2 0v3");
}
</style><g class="hntgybcog"><path class="ondbm74wj"/><path class="k4bitbb0t"/></g>`,
		"fallback": "uix:parking-timer",
	});
}

export default Component;
