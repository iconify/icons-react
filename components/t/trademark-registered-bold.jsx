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
		"content": `<style>.uomqr8bjg {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m28.7-70.58A36 36 0 0 0 136 76h-32a12 12 0 0 0-12 12v80a12 12 0 0 0 24 0v-20h16.24L150 174.66a12 12 0 0 0 20-13.32ZM116 100h20a12 12 0 0 1 0 24h-20Z");
}
</style><path class="uomqr8bjg"/>`,
		"fallback": "ph:trademark-registered-bold",
	});
}

export default Component;
