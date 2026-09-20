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
		"content": `<style>.q-6mfvn8l {
  fill: currentColor;
  d: path("M200 140H61.08A68.1 68.1 0 0 0 128 196h72a12 12 0 0 1 0 24h-72a92 92 0 0 1 0-184h72a12 12 0 0 1 0 24h-72a68.1 68.1 0 0 0-66.92 56H200a12 12 0 0 1 0 24");
}
</style><path class="q-6mfvn8l"/>`,
		"fallback": "ph:member-of-bold",
	});
}

export default Component;
