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
		"content": `<style>.vjf6grbgy {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20M79.57 196.57a60 60 0 0 1 96.86 0a83.72 83.72 0 0 1-96.86 0M100 120a28 28 0 1 1 28 28a28 28 0 0 1-28-28m94 59.94a83.5 83.5 0 0 0-29-23.42a52 52 0 1 0-74 0a83.5 83.5 0 0 0-29 23.42a84 84 0 1 1 131.9 0Z");
}
</style><path class="vjf6grbgy"/>`,
		"fallback": "ph:user-circle-bold",
	});
}

export default Component;
