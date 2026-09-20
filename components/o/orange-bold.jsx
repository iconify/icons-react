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
		"content": `<style>.g29d8eb3k {
  fill: currentColor;
  d: path("M174 72.36A68 68 0 0 0 204 16a12 12 0 0 0-12-12h-8a68 68 0 0 0-56 29.49A68 68 0 0 0 72 4h-8a12 12 0 0 0 0 24h8a44.07 44.07 0 0 1 42.6 33A92.05 92.05 0 1 0 174 72.36m4.22-44a44.14 44.14 0 0 1-36.46 31.24a44.14 44.14 0 0 1 36.47-31.22ZM128 220a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68m49.62-52.4a52 52 0 0 1-34 34a12.2 12.2 0 0 1-3.6.55a12 12 0 0 1-3.6-23.45a28 28 0 0 0 18.32-18.32a12 12 0 0 1 22.9 7.2Z");
}
</style><path class="g29d8eb3k"/>`,
		"fallback": "ph:orange-bold",
	});
}

export default Component;
