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
		"content": `<style>.ktm3ucc3p {
  d: path("M4 14v4a8 2.25 0 0 0 16 0v-4M2.75 9.085l12.124-7l1.25 2.165L4 11.25Z");
}

.m8414vq_j {
  d: path("M4 14a8 2.25 0 1 0 16 0a8 2.25 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m8414vq_j"/><path class="ktm3ucc3p"/></g>`,
		"fallback": "uix-sharp:shoe-polish",
	});
}

export default Component;
