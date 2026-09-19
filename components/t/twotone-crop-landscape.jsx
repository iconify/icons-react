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
		"content": `<style>.kao-oe2sm {
  fill: currentColor;
  d: path("M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 12H5V7h14z");
}
</style><path class="kao-oe2sm"/>`,
		"fallback": "ic:twotone-crop-landscape",
	});
}

export default Component;
