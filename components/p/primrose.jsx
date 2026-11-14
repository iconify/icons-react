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

.s6ddiac0x {
  d: path("M9.25 8.25a3.5 3.5 0 1 1 5.5 0a3.5 3.5 0 1 1 1.5 5.25a3.5 3.5 0 1 1-4.25 3a3.5 3.5 0 1 1-4.25-3a3.5 3.5 0 1 1 1.5-5.25");
}

.t08wuz0fb {
  d: path("M10.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="s6ddiac0x"/><path class="t08wuz0fb"/></g>`,
		"fallback": "uix:primrose",
	});
}

export default Component;
