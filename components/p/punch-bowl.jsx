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
		"content": `<style>.zw__30jse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10h18c0 5-4 8.5-9 8.5S3 15 3 10m9 8.5V21m-3.5 0h7M15 10l3.5-6.5");
}
</style><path class="zw__30jse"/>`,
		"fallback": "uix:punch-bowl",
	});
}

export default Component;
