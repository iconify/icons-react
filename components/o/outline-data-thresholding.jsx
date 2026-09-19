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
		"content": `<style>.ib4i46yge {
  fill: currentColor;
  d: path("m10.67 11l2 2l5.08-5.09l-1.41-1.41l-3.67 3.67l-2-2l-4.42 4.42L7.66 14z");
}

.lkxnyuoeg {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16h-1.73L19 17.27zm0-3h-.85l-3 3h-1.62l3-3h-2.12l-3 3H9.8l3-3h-2.12l-3 3H5.84l3-3H6.72L5 17.72V5h14z");
}
</style><path class="lkxnyuoeg"/><path class="ib4i46yge"/>`,
		"fallback": "ic:outline-data-thresholding",
	});
}

export default Component;
