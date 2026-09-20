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
		"content": `<style>.nzbtkbb6t {
  fill: currentColor;
  d: path("M124 136V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m4 28a8 8 0 1 0 8 8a8 8 0 0 0-8-8m108-36a11.87 11.87 0 0 1-3.5 8.45l-96.05 96.06a12 12 0 0 1-16.9 0l-96-96.06a12 12 0 0 1 0-16.9l96.05-96.06a12 12 0 0 1 16.9 0l96.05 96.06A11.87 11.87 0 0 1 236 128m-8 0a3.9 3.9 0 0 0-1.16-2.79l-96.05-96.06a4 4 0 0 0-5.58 0l-96 96.06a3.94 3.94 0 0 0 0 5.58l96.05 96.06a4 4 0 0 0 5.58 0l96.05-96.06A3.9 3.9 0 0 0 228 128");
}
</style><path class="nzbtkbb6t"/>`,
		"fallback": "ph:warning-diamond-thin",
	});
}

export default Component;
