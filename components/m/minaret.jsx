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
		"content": `<style>.udih6pbyx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21V9h4v12M10 9c0-4 4-4 4 0m-2-4V3M8 21h8m-6-7h4");
}
</style><path class="udih6pbyx"/>`,
		"fallback": "uix:minaret",
	});
}

export default Component;
