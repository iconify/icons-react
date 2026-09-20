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
		"content": `<style>.s4f0pvbxm {
  fill: currentColor;
  d: path("M220 48v40a12 12 0 0 1-24 0V77l-31.23 31.2a12 12 0 0 1-17-17L179 60h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m-12 108a12 12 0 0 0-12 12v11L56.49 39.51a12 12 0 0 0-17 17L179 196h-11a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12m-116.77-8.2l-51.72 51.71a12 12 0 0 0 17 17l51.71-51.72a12 12 0 0 0-17-17Z");
}
</style><path class="s4f0pvbxm"/>`,
		"fallback": "ph:shuffle-simple-bold",
	});
}

export default Component;
