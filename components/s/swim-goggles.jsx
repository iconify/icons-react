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
		"content": `<style>.b1b3qo53v {
  d: path("M3.75 14.5c0-9.5 16.5-9.5 16.5 0");
}

.o03evcc8v {
  d: path("M3.75 14.5a3.5 3 0 1 0 7 0a3.5 3 0 1 0-7 0Zm9.5 0a3.5 3 0 1 0 7 0a3.5 3 0 1 0-7 0Zm-2.5 0h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o03evcc8v"/><path class="b1b3qo53v"/></g>`,
		"fallback": "uix-sharp:swim-goggles",
	});
}

export default Component;
