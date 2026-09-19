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
		"content": `<style>.m0ltr79xw {
  fill: currentColor;
  d: path("M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3zM21 5c0-1.1-.9-2-2-2h-4v2h4v4h2zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm16 14v-4h-2v4h-4v2h4c1.1 0 2-.9 2-2");
}
</style><path class="m0ltr79xw"/>`,
		"fallback": "ic:twotone-crop-free",
	});
}

export default Component;
