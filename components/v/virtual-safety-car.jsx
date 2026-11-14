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
		"content": `<style>.bbjgw8b-l {
  d: path("M2.5 13v-2.5A1.5 1.5 0 0 1 4 9l3-.5l2.5-4H15l3 4l2 .5a1.5 1.5 0 0 1 1.5 1.5V13Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w4-oeo0uz {
  d: path("M3.75 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.75 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.75 1v5.5M20.5 16v5.5");
}
</style><g class="hntgybcog"><path class="bbjgw8b-l"/><path class="w4-oeo0uz"/></g>`,
		"fallback": "uix:virtual-safety-car",
	});
}

export default Component;
