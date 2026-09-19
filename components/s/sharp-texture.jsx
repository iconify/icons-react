import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o7uk6h1dw {
  fill: currentColor;
  d: path("M19.66 3L3.07 19.59V21h1.41L21.07 4.42V3zm-7.71 0l-8.88 8.88v2.83L14.78 3zM3.07 3v4l4-4zm18 18v-4l-4 4zm-8.88 0l8.88-8.88V9.29L9.36 21z");
}
</style><path class="o7uk6h1dw"/>`,
		"fallback": "ic:sharp-texture",
	});
}

export default Component;
