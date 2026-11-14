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
		"content": `<style>.a1lvvsnda {
  d: path("M11 13V4.5a8.5 8.5 0 1 0 8.5 8.5Z");
}

.l3bwo_e5b {
  d: path("M13.5 10.5v-8a8 8 0 0 1 8 8ZM10 12.75c0-.5-.5-.75-1.25-.75s-1.25.5-1.25 1c0 1.25 2.5.75 2.5 2.5c0 .5-.5 1-1.25 1S7.5 16 7.5 15.75m1.25-4.5V12m0 4.5v.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a1lvvsnda"/><path class="l3bwo_e5b"/></g>`,
		"fallback": "uix-sharp:statement-tax-withheld",
	});
}

export default Component;
