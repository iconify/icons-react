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

.vofk7wb4e {
  d: path("M2.5 10.5h19m-2 0l-2 9.5h-11l-2-9.5");
}

.wbojtnslg {
  d: path("M4.75 7.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m11-2.75h2a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 14 8.75v-2.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="vofk7wb4e"/><path class="wbojtnslg"/></g>`,
		"fallback": "uix:tidy-up",
	});
}

export default Component;
