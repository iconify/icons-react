import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qwslx4bbn {
  fill: currentColor;
  d: path("M128 112a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44m72 104H77.16l120.13-106a8 8 0 0 0 1.1-1.19a8.07 8.07 0 0 0 1.61-5.08A8 8 0 0 0 186.71 98l-24.54 21.65A80 80 0 0 0 49 179.25a8 8 0 0 0-.1 1.1l-.9 43.48a8 8 0 0 0 8 8.17h144a8 8 0 0 0 0-16m-11.88-73a8 8 0 0 0-6.25 1.94L119.47 200H200a8 8 0 0 0 8-8a79.6 79.6 0 0 0-14.27-45.62a8 8 0 0 0-5.61-3.38");
}
</style><path class="qwslx4bbn"/>`,
		"fallback": "ph:seatbelt-fill",
	});
}

export default Component;
