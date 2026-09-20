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
		"content": `<style>.qr3rnjd4s {
  fill: currentColor;
  d: path("M222 40v36a6 6 0 0 1-12 0V46h-30a6 6 0 0 1 0-12h36a6 6 0 0 1 6 6m-6 134a6 6 0 0 0-6 6v30h-30a6 6 0 0 0 0 12h36a6 6 0 0 0 6-6v-36a6 6 0 0 0-6-6M76 210H46v-30a6 6 0 0 0-12 0v36a6 6 0 0 0 6 6h36a6 6 0 0 0 0-12M40 82a6 6 0 0 0 6-6V46h30a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v36a6 6 0 0 0 6 6m136 92a6 6 0 0 1-4.8-2.4a54 54 0 0 0-86.4 0a6 6 0 1 1-9.6-7.2a65.65 65.65 0 0 1 29.69-22.26a38 38 0 1 1 46.22 0a65.65 65.65 0 0 1 29.69 22.26a6 6 0 0 1-4.8 9.6m-48-36a26 26 0 1 0-26-26a26 26 0 0 0 26 26");
}
</style><path class="qr3rnjd4s"/>`,
		"fallback": "ph:user-focus-light",
	});
}

export default Component;
