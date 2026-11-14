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
		"content": `<style>.di5rp4h0x {
  d: path("M8.75 10a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0M14 6h.01");
}

.gi5yrsb0h {
  d: path("M9.5 2.5h5C17 6 18.5 10 18 15H6c-.5-5 1-9 3.5-12.5M6 15l-.5 6.5h13L18 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gi5yrsb0h"/><path class="di5rp4h0x"/></g>`,
		"fallback": "uix:lava-lamp-convection",
	});
}

export default Component;
