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
		"content": `<style>.tykorxoor {
  fill: currentColor;
  d: path("M128 16a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m32 96h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24V72a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16");
}
</style><path class="tykorxoor"/>`,
		"fallback": "ph:map-pin-plus-fill",
	});
}

export default Component;
