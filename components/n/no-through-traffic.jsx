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

.r3kjfsbxb {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0m3-6.75l13.5 13.5M12 17.5V6.75");
}

.wdgxibs3k {
  d: path("M8.5 10L12 6.5l3.5 3.5");
}
</style><g class="hntgybcog"><path class="r3kjfsbxb"/><path class="wdgxibs3k"/></g>`,
		"fallback": "uix:no-through-traffic",
	});
}

export default Component;
