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
		"content": `<style>.l631h6bfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 8.25h9q1.5 0 1.36 1.49l-.97 10.02q-.14 1.49-1.64 1.49h-6.5q-1.5 0-1.64-1.49L6.14 9.74Q6 8.25 7.5 8.25m4.5 0l1.5-5.5h3m-13.25.5l17.5 17.5");
}
</style><path class="l631h6bfy"/>`,
		"fallback": "iconoven:no-straw",
	});
}

export default Component;
