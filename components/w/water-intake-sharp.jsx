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
		"content": `<style>.ls7o08bdu {
  d: path("M3.4 11.75c1.6.9 3.3.9 4.9 0s3.3-.9 4.9 0m5.55-9c1.25 1.75 2.5 3.15 2.5 4.4a2.5 2.5 0 0 1-5 0c0-1.25 1.25-2.65 2.5-4.4Z");
}

.nsrz7rb-s {
  d: path("M4.25 4.75h9.5l-.11 1.5l-1.03 13.5l-.11 1.5H4.25l-.14-1.49L2.89 6.24l-.14-1.49z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nsrz7rb-s"/><path class="ls7o08bdu"/></g>`,
		"fallback": "iconoven:water-intake-sharp",
	});
}

export default Component;
