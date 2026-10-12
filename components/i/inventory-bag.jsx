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
		"content": `<style>.gs6vyn70z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 3L12 4.25L15.75 3L14.5 8c3.75 2 6.25 5.25 6.25 8.75c0 2.5-1.75 4.5-4.25 4.5H7.25c-2.5 0-4.25-2-4.25-4.5C3 13.25 5.5 10 9.25 8Zm1 5h5.5");
}
</style><path class="gs6vyn70z"/>`,
		"fallback": "iconoven:inventory-bag",
	});
}

export default Component;
