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

.rl70ebcsa {
  d: path("M21.356 10.35a9.5 9.5 0 1 1-7.706-7.706");
}

.w61kkhbdl {
  d: path("m7.5 11.5l4 4l9-9.5");
}
</style><g class="hntgybcog"><path class="rl70ebcsa"/><path class="w61kkhbdl"/></g>`,
		"fallback": "uix:success",
	});
}

export default Component;
