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
		"content": `<style>.tf0a0obgf {
  fill: currentColor;
  d: path("M80 122h96a6 6 0 0 1 0 12H80a6 6 0 0 1 0-12m24 48H64a42 42 0 0 1 0-84h40a6 6 0 0 0 0-12H64a54 54 0 0 0 0 108h40a6 6 0 0 0 0-12m88-96h-40a6 6 0 0 0 0 12h40a42 42 0 0 1 0 84h-40a6 6 0 0 0 0 12h40a54 54 0 0 0 0-108");
}
</style><path class="tf0a0obgf"/>`,
		"fallback": "ph:link-simple-horizontal-light",
	});
}

export default Component;
