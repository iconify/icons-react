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
		"content": `<style>.q8zq5cl6j {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m30-66a34 34 0 0 1-58.29 23.79a6 6 0 0 1 8.58-8.39A22 22 0 1 0 124 130a6 6 0 0 1-4.92-9.44L140.48 90H104a6 6 0 0 1 0-12h48a6 6 0 0 1 4.92 9.44l-22.53 32.18A34.06 34.06 0 0 1 158 152");
}
</style><path class="q8zq5cl6j"/>`,
		"fallback": "ph:number-circle-three-light",
	});
}

export default Component;
