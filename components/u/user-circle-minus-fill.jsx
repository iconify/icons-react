import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pebizab4r {
  fill: currentColor;
  d: path("M128 76a44 44 0 1 1-44 44a44 44 0 0 1 44-44m48-12h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16m39.87 24.46A8 8 0 0 0 211 98.67a88 88 0 0 1-17.23 87.74A79.9 79.9 0 0 0 172 165.1a4 4 0 0 0-4.84.32a59.81 59.81 0 0 1-78.27 0a4 4 0 0 0-4.89-.32a79.7 79.7 0 0 0-21.79 21.31A88 88 0 0 1 128 40a89 89 0 0 1 14.68 1.22a8 8 0 0 0 2.64-15.78a103.9 103.9 0 1 0 80.76 67.89a8 8 0 0 0-10.21-4.87");
}
</style><path class="pebizab4r"/>`,
		"fallback": "ph:user-circle-minus-fill",
	});
}

export default Component;
