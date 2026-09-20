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
		"content": `<style>.a1_1t_91j {
  fill: currentColor;
  d: path("M170.5 115.7A44 44 0 0 0 140 40H64a7.9 7.9 0 0 0-8 8v152a8 8 0 0 0 8 8h88a48 48 0 0 0 18.5-92.3ZM72 56h68a28 28 0 0 1 0 56H72Zm80 136H72v-64h80a32 32 0 0 1 0 64Z");
}
</style><path class="a1_1t_91j"/>`,
		"fallback": "ph:text-bolder-fill",
	});
}

export default Component;
