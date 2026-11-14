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
		"content": `<style>.vx36jpz4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 21v-.5c0-1.6 1.3-2.5 3-2.5s3 .9 3 2.5v.5m7 0v-.5c0-1.6 1.3-2.5 3-2.5s3 .9 3 2.5v.5M6 6h12M8.5 3.5L6 6l2.5 2.5m7-5L18 6l-2.5 2.5");
}
</style><path class="vx36jpz4y"/>`,
		"fallback": "uix:people-arrows",
	});
}

export default Component;
