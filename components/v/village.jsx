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
		"content": `<style>.bt_nlbbqn {
  d: path("M10 20.5V10l5.75-6l5.75 6v10.5Zm0-7L6.25 9.75L2.5 13.5v7H10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqz01fb_j {
  d: path("M15.5 15h.5a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-.5A1.5 1.5 0 0 1 14 19v-2.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="bt_nlbbqn"/><path class="yqz01fb_j"/></g>`,
		"fallback": "uix:village",
	});
}

export default Component;
