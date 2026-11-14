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

.pl69tnbyu {
  d: path("M13.5 2.5c0 4.5-9 5-9 9c0 3.594 7.264 4.362 8.74 7.745M4.5 11.5h9m2.5 8a2.5 2 0 1 0 5 0a2.5 2 0 1 0-5 0M15 16a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m2.75-1.25a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0M20.5 16a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0");
}

.qu4i8r00z {
  d: path("M4.5 2.5c0 4.5 9 5 9 9s-9 4.5-9 9");
}
</style><g class="hntgybcog"><path class="qu4i8r00z"/><path class="pl69tnbyu"/></g>`,
		"fallback": "uix:pet-dna-test",
	});
}

export default Component;
