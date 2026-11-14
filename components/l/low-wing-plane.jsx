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
		"content": `<style>.diuwg0bfx {
  d: path("M12 8za2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 12 19a2.5 2.5 0 0 1-2.5-2.5v-6A2.5 2.5 0 0 1 12 8");
}

.g-qexxl3v {
  d: path("M9.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-6 0h6m5 0h6m-18 10h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="diuwg0bfx"/><path class="g-qexxl3v"/></g>`,
		"fallback": "uix:low-wing-plane",
	});
}

export default Component;
