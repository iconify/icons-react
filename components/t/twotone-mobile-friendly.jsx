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
		"content": `<style>.oy-kh2bzw {
  fill: currentColor;
  d: path("M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7.01 13.47l-2.55-2.55l-1.27 1.27L7 16l7.19-7.19l-1.27-1.27z");
}
</style><path class="oy-kh2bzw"/>`,
		"fallback": "ic:twotone-mobile-friendly",
	});
}

export default Component;
