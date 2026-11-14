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

.kjzfsabuw {
  d: path("M12 8v4h3M5 5L3 3m16 2l2-2M5 19l-2 2m16-2l2 2");
}

.nkl72kbds {
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="nkl72kbds"/><path class="kjzfsabuw"/></g>`,
		"fallback": "uix:wall-clock-modern",
	});
}

export default Component;
