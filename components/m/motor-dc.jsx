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
		"content": `<style>.ako9xdb4u {
  d: path("M3.5 12a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0ZM12 3.5v-1");
}

.f4cgg7q8i {
  d: path("M8.5 14.5v-5L12 13l3.5-3.5v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ako9xdb4u"/><path class="f4cgg7q8i"/></g>`,
		"fallback": "uix-sharp:motor-dc",
	});
}

export default Component;
