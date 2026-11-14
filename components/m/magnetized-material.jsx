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
		"content": `<style>.wocgi0bbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4v8a6 6 0 0 0 12 0V4h-4v8a2 2 0 0 1-4 0V4Zm0 3h4m4 0h4");
}
</style><path class="wocgi0bbz"/>`,
		"fallback": "uix:magnetized-material",
	});
}

export default Component;
