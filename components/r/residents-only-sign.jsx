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

.tob9ffb0a {
  d: path("M7 11.5V9.314a1.5 1.5 0 0 1 .683-1.258l3.5-2.275a1.5 1.5 0 0 1 1.634 0l3.5 2.275A1.5 1.5 0 0 1 17 9.314V11.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 11.5");
}

.xhw75ibjv {
  d: path("M7.375 2.5h9.25A4.375 4.375 0 0 1 21 6.875v4.75A4.375 4.375 0 0 1 16.625 16h-9.25A4.375 4.375 0 0 1 3 11.625v-4.75A4.375 4.375 0 0 1 7.375 2.5M12 16v5.5");
}
</style><g class="hntgybcog"><path class="xhw75ibjv"/><path class="tob9ffb0a"/></g>`,
		"fallback": "uix:residents-only-sign",
	});
}

export default Component;
