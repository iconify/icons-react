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
		"content": `<style>.ov14zp2gy {
  fill: currentColor;
  d: path("M11 5v5.59H7.5l4.5 4.5l4.5-4.5H13V5zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4z");
}
</style><path class="ov14zp2gy"/>`,
		"fallback": "ic:play-for-work",
	});
}

export default Component;
