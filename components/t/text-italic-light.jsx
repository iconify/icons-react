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
		"content": `<style>.mxe9q-b3v {
  fill: currentColor;
  d: path("M198 56a6 6 0 0 1-6 6h-35.68l-44 132H144a6 6 0 0 1 0 12H64a6 6 0 0 1 0-12h35.68l44-132H112a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6");
}
</style><path class="mxe9q-b3v"/>`,
		"fallback": "ph:text-italic-light",
	});
}

export default Component;
