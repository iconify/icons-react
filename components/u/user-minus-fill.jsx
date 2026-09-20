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
		"content": `<style>.jh-_otjks {
  fill: currentColor;
  d: path("M198.13 194.85A8 8 0 0 1 192 208H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M248 128h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16");
}
</style><path class="jh-_otjks"/>`,
		"fallback": "ph:user-minus-fill",
	});
}

export default Component;
