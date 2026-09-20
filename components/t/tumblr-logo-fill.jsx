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
		"content": `<style>.ri9ythl5e {
  fill: currentColor;
  d: path("M152 120v48a8 8 0 0 0 8 8h32a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-40a64.07 64.07 0 0 1-64-64v-56H64a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8a40 40 0 0 0 40-40a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v40h40a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8Z");
}
</style><path class="ri9ythl5e"/>`,
		"fallback": "ph:tumblr-logo-fill",
	});
}

export default Component;
