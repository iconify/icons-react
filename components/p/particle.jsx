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
		"content": `<style>.nrz979bts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM4 20l5.75-5.75M4.5 15.5l3-3m1 7l3-3");
}
</style><path class="nrz979bts"/>`,
		"fallback": "uix-sharp:particle",
	});
}

export default Component;
