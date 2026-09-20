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
		"content": `<style>.t00syqb8f {
  fill: currentColor;
  d: path("M24 128a40 40 0 0 0 40 40h40a8 8 0 0 1 0 16H64a56 56 0 0 1 0-112h40a8 8 0 0 1 0 16H64a40 40 0 0 0-40 40m168-56h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112");
}
</style><path class="t00syqb8f"/>`,
		"fallback": "ph:link-simple-horizontal-break",
	});
}

export default Component;
