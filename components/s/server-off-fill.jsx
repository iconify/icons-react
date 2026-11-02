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
		"content": `<style>.zlxzbnbhf {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-1.755-1.755A3 3 0 0 1 19 21H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h6.586l-2-2H5a3 3 0 0 1-3-3V6c0-.696.239-1.367.681-1.904L1.293 2.707a.999.999 0 1 1 1.414-1.414M15.243 11l-8-8H19a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3ZM22 17.757L17.243 13H19a3 3 0 0 1 3 3ZM7.01 16H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="zlxzbnbhf"/>`,
		"fallback": "coolicons:server-off-fill",
	});
}

export default Component;
