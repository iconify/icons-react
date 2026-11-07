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
		"content": `<style>.lgargiblk {
  fill: currentColor;
  d: path("M8 3h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8ZM6 7v14H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm12 0h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-6 4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Zm6 4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="lgargiblk"/>`,
		"fallback": "coolicons:newspaper-fill",
	});
}

export default Component;
