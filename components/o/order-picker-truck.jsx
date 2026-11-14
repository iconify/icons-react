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
		"content": `<style>.gnflflb_q {
  d: path("M4.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yo8gcm7ys {
  d: path("M4.75 13h14.5A1.75 1.75 0 0 1 21 14.75a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 14.75A1.75 1.75 0 0 1 4.75 13M18 2.5V13m0-4H8.5V4.5");
}
</style><g class="hntgybcog"><path class="yo8gcm7ys"/><path class="gnflflb_q"/></g>`,
		"fallback": "uix:order-picker-truck",
	});
}

export default Component;
