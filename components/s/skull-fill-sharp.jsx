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
		"content": `<style>.z33hrsxcq {
  fill: currentColor;
  d: path("M15 22v-4a1 1 0 0 0-2 0v4h-2v-4a1 1 0 0 0-2 0v4H8a3 3 0 0 1-3-3v-2.65A8.81 8.81 0 0 1 6.052 4.501A8.81 8.81 0 0 1 19 16.35V19a3 3 0 0 1-3 3ZM7.158 11.221a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558M13 12a2 2 0 1 0 3.999.001A2 2 0 0 0 13 12");
}
</style><path class="z33hrsxcq"/>`,
		"fallback": "coolicons:skull-fill-sharp",
	});
}

export default Component;
