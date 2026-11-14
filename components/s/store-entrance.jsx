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

.lo8a9nboj {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0m-10 4h2a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 13 20h-2a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 11 13");
}

.run5ny8xc {
  d: path("m3 9l1.5-5h15L21 9M4.5 11v9h15v-9");
}
</style><g class="hntgybcog"><path class="run5ny8xc"/><path class="lo8a9nboj"/></g>`,
		"fallback": "uix:store-entrance",
	});
}

export default Component;
