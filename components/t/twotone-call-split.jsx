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
		"content": `<style>.cdbwu9bnt {
  fill: currentColor;
  d: path("M20 4h-6l2.29 2.29l-2.88 2.88l1.42 1.42l2.88-2.88L20 10zM4 4v6l2.29-2.29l4.71 4.7V20h2v-8.41l-5.29-5.3L10 4z");
}
</style><path class="cdbwu9bnt"/>`,
		"fallback": "ic:twotone-call-split",
	});
}

export default Component;
