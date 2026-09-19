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
		"content": `<style>.tqy4k_biv {
  fill: currentColor;
  d: path("M11 1v4H8l4 4l4-4h-3V1zM4 11h16v2H4zm4 8h3v4h2v-4h3l-4-4z");
}
</style><path class="tqy4k_biv"/>`,
		"fallback": "ic:twotone-vertical-align-center",
	});
}

export default Component;
