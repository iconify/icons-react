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
		"content": `<style>.jybwwr5rf {
  fill: currentColor;
  d: path("m18 8l4 4l-4 4l-1.41-1.41L18.17 13H13v-2h5.17l-1.59-1.59zM7 1.01L17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99M7 21h10v-1H7zM7 4h10V3H7z");
}
</style><path class="jybwwr5rf"/>`,
		"fallback": "ic:outline-send-to-mobile",
	});
}

export default Component;
