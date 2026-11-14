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

.iblfn_brt {
  fill: currentColor;
  d: path("M10 11h4a3.5 3.5 0 0 1 3.5 3.5v2A3.5 3.5 0 0 1 14 20h-4a3.5 3.5 0 0 1-3.5-3.5v-2A3.5 3.5 0 0 1 10 11");
}

.r_5ej1lys {
  d: path("M9 11V7a3 3 0 0 1 6 0v4");
}
</style><g class="hntgybcog"><path class="iblfn_brt"/><path class="r_5ej1lys"/></g>`,
		"fallback": "uix:lock-small",
	});
}

export default Component;
