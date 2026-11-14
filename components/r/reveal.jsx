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
		"content": `<style>.d8t6wnxxe {
  d: path("M9.25 14.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M12 2.5v3M5.5 4L7 6.5M18.5 4L17 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nedyryuud {
  d: path("M2.5 14.5C4.5 11 8 9 12 9s7.5 2 9.5 5.5C19.5 18 16 20 12 20s-7.5-2-9.5-5.5");
}
</style><g class="hntgybcog"><path class="nedyryuud"/><path class="d8t6wnxxe"/></g>`,
		"fallback": "uix:reveal",
	});
}

export default Component;
