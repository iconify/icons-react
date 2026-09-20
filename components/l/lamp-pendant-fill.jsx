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
		"content": `<style>.lbo1leb3r {
  fill: currentColor;
  d: path("M176 74.78V72a16 16 0 0 0-16-16h-24V16a8 8 0 0 0-16 0v40H96a16 16 0 0 0-16 16v2.78A111.73 111.73 0 0 0 16 176a8 8 0 0 0 8 8h64a40 40 0 0 0 80 0h64a8 8 0 0 0 8-8a111.73 111.73 0 0 0-64-101.22M128 208a24 24 0 0 1-24-24h48a24 24 0 0 1-24 24");
}
</style><path class="lbo1leb3r"/>`,
		"fallback": "ph:lamp-pendant-fill",
	});
}

export default Component;
