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
		"content": `<style>.m3r5xy_np {
  fill: currentColor;
  d: path("m13 8.2l-1-1l-4 4l-4-4l-1 1l4 4l-4 4l1 1l4-4l4 4l1-1l-4-4zM21 1H7v5h2V4h10v16H9v-2H7v5h14z");
}
</style><path class="m3r5xy_np"/>`,
		"fallback": "ic:sharp-phonelink-erase",
	});
}

export default Component;
