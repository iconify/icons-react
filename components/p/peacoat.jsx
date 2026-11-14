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
		"content": `<style>.aj-obgk9x {
  d: path("M8.5 2.5L7 6.5l5 5.5l5-5.5l-1.5-4M9.5 15h.01m4.99 0h.01M9.5 18.5h.01m4.99 0h.01");
}

.h5ut3f11q {
  d: path("M8.5 2.5L4.5 4q-1 .5-1 2l-1 13h3.25v2.5h12.5V19h3.25l-1-13q0-1.5-1-2l-4-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h5ut3f11q"/><path class="aj-obgk9x"/></g>`,
		"fallback": "uix:peacoat",
	});
}

export default Component;
