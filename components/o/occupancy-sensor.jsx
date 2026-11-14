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
		"content": `<style>.c55-940jf {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM7 21.5c0-3 2.25-4.5 5-4.5s5 1.5 5 4.5");
}

.m2goseb2m {
  d: path("M2.5 10L12 2.5l9.5 7.5v11.5h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m2goseb2m"/><path class="c55-940jf"/></g>`,
		"fallback": "uix-sharp:occupancy-sensor",
	});
}

export default Component;
