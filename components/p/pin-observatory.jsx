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

.m9fy4_0ed {
  d: path("M10.5 21v-4h3v4");
}

.nn18yybta {
  d: path("M4 21v-8a8 8 0 0 1 16 0v8Zm0-8h16m-7-3l6.5-6.5");
}
</style><g class="hntgybcog"><path class="nn18yybta"/><path class="m9fy4_0ed"/></g>`,
		"fallback": "uix:pin-observatory",
	});
}

export default Component;
