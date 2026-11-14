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

.r8u4xs0qy {
  d: path("M17 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-5 11.5v-9M8.5 11L12 7.5l3.5 3.5");
}

.rl70ebcsa {
  d: path("M21.356 10.35a9.5 9.5 0 1 1-7.706-7.706");
}
</style><g class="hntgybcog"><path class="rl70ebcsa"/><path class="r8u4xs0qy"/></g>`,
		"fallback": "uix:update-available",
	});
}

export default Component;
