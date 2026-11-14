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
		"content": `<style>.kzqzgvh9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 21V7.5a3.75 3.75 0 0 0-7.5 0v2M14 21h3");
}
</style><path class="kzqzgvh9l"/>`,
		"fallback": "uix-sharp:walking-cane",
	});
}

export default Component;
