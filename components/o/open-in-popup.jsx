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
		"content": `<style>.bzbznccrz {
  d: path("M9.5 17H5a2.5 2.5 0 0 1-2.5-2.5V5A2.5 2.5 0 0 1 5 2.5h11.5A2.5 2.5 0 0 1 19 5v4.5m-16.5-3H19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vy73lxiir {
  d: path("M16 12.5h2a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5h-2a3.5 3.5 0 0 1-3.5-3.5v-2a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="bzbznccrz"/><path class="vy73lxiir"/></g>`,
		"fallback": "uix:open-in-popup",
	});
}

export default Component;
