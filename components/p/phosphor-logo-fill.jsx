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
		"content": `<style>.h53jnoe-b {
  fill: currentColor;
  d: path("M152 32H72a8 8 0 0 0-8 8v128a80.09 80.09 0 0 0 80 80a8 8 0 0 0 8-8v-64a72 72 0 0 0 0-144m-16 199.5A64.14 64.14 0 0 1 80.51 176H136Zm0-94L85.68 48H136Zm16 22.5V48a56 56 0 0 1 0 112");
}
</style><path class="h53jnoe-b"/>`,
		"fallback": "ph:phosphor-logo-fill",
	});
}

export default Component;
