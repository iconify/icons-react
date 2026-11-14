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

.x_qt-3bth {
  d: path("M4 10.5v3a8 8 0 0 0 16 0v-3m-16 0h16");
}

.ybpin5e7w {
  d: path("M4 10.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}
</style><g class="hntgybcog"><path class="ybpin5e7w"/><path class="x_qt-3bth"/></g>`,
		"fallback": "uix:pill-scored",
	});
}

export default Component;
