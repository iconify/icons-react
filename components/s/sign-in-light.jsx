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
		"content": `<style>.fmdyg8txf {
  fill: currentColor;
  d: path("m140.24 132.24l-40 40a6 6 0 0 1-8.48-8.48L121.51 134H24a6 6 0 0 1 0-12h97.51L91.76 92.24a6 6 0 0 1 8.48-8.48l40 40a6 6 0 0 1 0 8.48M200 34h-64a6 6 0 0 0 0 12h58v164h-58a6 6 0 0 0 0 12h64a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6");
}
</style><path class="fmdyg8txf"/>`,
		"fallback": "ph:sign-in-light",
	});
}

export default Component;
