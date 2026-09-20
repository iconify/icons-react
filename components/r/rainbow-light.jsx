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
		"content": `<style>.o53ni_z_w {
  fill: currentColor;
  d: path("M182 168v16a6 6 0 0 1-12 0v-16a42 42 0 0 0-84 0v16a6 6 0 0 1-12 0v-16a54 54 0 0 1 108 0m-54-86a86.1 86.1 0 0 0-86 86v16a6 6 0 0 0 12 0v-16a74 74 0 0 1 148 0v16a6 6 0 0 0 12 0v-16a86.1 86.1 0 0 0-86-86m0-32A118.13 118.13 0 0 0 10 168v16a6 6 0 0 0 12 0v-16a106 106 0 0 1 212 0v16a6 6 0 0 0 12 0v-16A118.13 118.13 0 0 0 128 50");
}
</style><path class="o53ni_z_w"/>`,
		"fallback": "ph:rainbow-light",
	});
}

export default Component;
