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

.o_a1fhber {
  d: path("M11.375 2h1.25A4.375 4.375 0 0 1 17 6.375v11.25A4.375 4.375 0 0 1 12.625 22h-1.25A4.375 4.375 0 0 1 7 17.625V6.375A4.375 4.375 0 0 1 11.375 2");
}

.witf81k6a {
  d: path("M10.5 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 5.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-.5 5.75h4m-1.5-1.5l1.5 1.5l-1.5 1.5");
}
</style><g class="hntgybcog"><path class="o_a1fhber"/><path class="witf81k6a"/></g>`,
		"fallback": "uix:traffic-light-arrow-right",
	});
}

export default Component;
