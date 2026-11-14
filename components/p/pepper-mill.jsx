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
		"content": `<style>.ef-57fb3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8h6l1 12.5H8Zm1 0V6a2 2 0 0 1 4 0v2m-2-4.5V4m-3.5 9h7");
}
</style><path class="ef-57fb3z"/>`,
		"fallback": "uix:pepper-mill",
	});
}

export default Component;
