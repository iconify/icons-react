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
		"content": `<style>.k1d4aoxgi {
  fill: currentColor;
  d: path("M5 4h14v2H5zm0 10h4v6h6v-6h4l-7-7zm8-2v6h-2v-6H9.83L12 9.83L14.17 12z");
}
</style><path class="k1d4aoxgi"/>`,
		"fallback": "ic:outline-publish",
	});
}

export default Component;
