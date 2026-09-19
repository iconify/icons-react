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
		"content": `<style>.wbr0lgbjm {
  fill: currentColor;
  d: path("M4.83 2H20c1.1 0 2 .9 2 2v15.17l-2-2V4H6.83zm6.09 4l-.57 1.52l1.36 1.36l.23-.66h.1l.54 1.52l3.04 3.04L13.07 6zm9.57 17.31L19.17 22H4c-1.1 0-2-.9-2-2V4.83L.69 3.51L2.1 2.1l19.8 19.8zM17.17 20l-5.07-5.07H9.58L8.49 18H6.41l2.39-6.37L4 6.83V20z");
}
</style><path class="wbr0lgbjm"/>`,
		"fallback": "ic:outline-font-download-off",
	});
}

export default Component;
