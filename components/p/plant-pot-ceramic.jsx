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
		"content": `<style>.gmjpzbb3i {
  d: path("M6 15q3-1.5 6 0t6 0m-6-4V7m0 0c0-2.5 2-4 5-4c0 2.5-2 4-5 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vwo_gyb4p {
  d: path("M3.5 11h17M5 11l1.75 7.75h10.5L19 11M9 21.5h6");
}
</style><g class="hntgybcog"><path class="vwo_gyb4p"/><path class="gmjpzbb3i"/></g>`,
		"fallback": "uix:plant-pot-ceramic",
	});
}

export default Component;
