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
		"content": `<style>.h7ray43gz {
  d: path("M3.5 20L6 12.5l4-3l3-5l4.5 3L20 20M2.5 20h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.julv8sb5z {
  d: path("m5 15.5l6-3h7.5");
}
</style><g class="hntgybcog"><path class="h7ray43gz"/><path class="julv8sb5z"/></g>`,
		"fallback": "uix:outcrop",
	});
}

export default Component;
