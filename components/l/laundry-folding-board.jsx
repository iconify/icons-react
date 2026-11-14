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
		"content": `<style>.e20ovebdn {
  d: path("M10 6.5a2 2 0 0 0 4 0");
}

.g33vlsbkl {
  d: path("M2.5 12h19M5 12l-1.5 5.5M19 12l1.5 5.5M7.75 6.5h8.5V12h-8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g33vlsbkl"/><path class="e20ovebdn"/></g>`,
		"fallback": "uix-sharp:laundry-folding-board",
	});
}

export default Component;
