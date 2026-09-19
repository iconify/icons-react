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
		"content": `<style>.wv3-n4qgs {
  fill: currentColor;
  d: path("m4 17.2l4-4l4 4l1-1l-4-4l4-4l-1-1l-4 4l-4-4l-1 1l4 4l-4 4zM9 23h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2");
}
</style><path class="wv3-n4qgs"/>`,
		"fallback": "ic:twotone-phonelink-erase",
	});
}

export default Component;
