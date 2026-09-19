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
		"content": `<style>.qsep5l70b {
  fill: currentColor;
  d: path("M.71 2.39a.996.996 0 0 0 0 1.41L2 5.1V19c0 1.1.9 2 2 2h13.9l2.29 2.29a.996.996 0 1 0 1.41-1.41L2.12 2.39a.996.996 0 0 0-1.41 0M6 19H4v-2h2zm0-4H4v-2h2zm-2-4V9h2v2zm6 8H8v-2h2zm-2-4v-2h2v2zm4 4v-2h1.9l2 2zM8 5h2v2h-.45L12 9.45V9h7c.55 0 1 .45 1 1v7.45l2 2V9c0-1.1-.9-2-2-2h-8V5c0-1.1-.9-2-2-2H5.55L8 5.45zm8 6h2v2h-2z");
}
</style><path class="qsep5l70b"/>`,
		"fallback": "ic:round-domain-disabled",
	});
}

export default Component;
