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
		"content": `<style>.c-52j6boz {
  d: path("M3.5 2.5h17V6h-17Zm2 3.5l1.75 9.5h9.5L18.5 6");
}

.m540i-bfr {
  d: path("M10.5 11.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5 7l1 1a1.5 1.5 0 1 1-2 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c-52j6boz"/><path class="m540i-bfr"/></g>`,
		"fallback": "uix-sharp:pot-drainage-hole",
	});
}

export default Component;
