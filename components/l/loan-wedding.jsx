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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.was_9yb3e {
  d: path("M10 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ylnr1s7om {
  d: path("M4 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}
</style><g class="ulnmmdpxh"><path class="ylnr1s7om"/><path class="was_9yb3e"/></g>`,
		"fallback": "uix-sharp:loan-wedding",
	});
}

export default Component;
