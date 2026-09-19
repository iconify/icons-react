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
		"content": `<style>.wp0xwlbzo {
  fill: currentColor;
  d: path("m3.55 18.54l1.41 1.41l1.79-1.8l-1.41-1.41zM11 22.45h2V19.5h-2zM4 10.5H1v2h3zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19m5 4.19v2h3v-2zm-2.76 7.66l1.79 1.8l1.41-1.41l-1.8-1.79z");
}
</style><path class="wp0xwlbzo"/>`,
		"fallback": "ic:wb-incandescent",
	});
}

export default Component;
