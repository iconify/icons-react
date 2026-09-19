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
		"content": `<style>.nf8q-hhgu {
  fill: currentColor;
  d: path("M21 16.61V6.5l-4 4V6h-6.61zM3.41 1.86L2 3.27L4.73 6H3v12h13.73l3 3l1.41-1.41z");
}
</style><path class="nf8q-hhgu"/>`,
		"fallback": "ic:sharp-videocam-off",
	});
}

export default Component;
