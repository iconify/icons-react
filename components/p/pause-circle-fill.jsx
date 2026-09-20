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
		"content": `<style>.wog09xrky {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m-16 136a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Z");
}
</style><path class="wog09xrky"/>`,
		"fallback": "ph:pause-circle-fill",
	});
}

export default Component;
