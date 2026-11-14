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
		"content": `<style>.h3fdig0nn {
  d: path("M10 12.25L12.5 10v7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klsc_mb6a {
  d: path("M3 12V5a1.5 1.5 0 0 1 1.5-1.5H7A1.5 1.5 0 0 1 8.5 5v2h7V5A1.5 1.5 0 0 1 17 3.5h2.5A1.5 1.5 0 0 1 21 5v7c0 5-4 9-9 9s-9-4-9-9");
}
</style><g class="hntgybcog"><path class="klsc_mb6a"/><path class="h3fdig0nn"/></g>`,
		"fallback": "uix:mx-number-plate",
	});
}

export default Component;
