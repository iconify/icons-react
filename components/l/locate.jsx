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

.uvaqjjx9u {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.vqim2xosa {
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0Zm7-9.5V5m0 14v2.5M2.5 12H5m14 0h2.5");
}
</style><g class="ulnmmdpxh"><path class="vqim2xosa"/><path class="uvaqjjx9u"/></g>`,
		"fallback": "uix-sharp:locate",
	});
}

export default Component;
