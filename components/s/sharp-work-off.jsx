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
		"content": `<style>.wi0cxlble {
  fill: currentColor;
  d: path("M10 4h4v2h-3.6L22 17.6V6h-6V4c0-1.1-.9-2-2-2h-4c-.98 0-1.79.71-1.96 1.64L10 5.6zM3.4 1.84L1.99 3.25L4.74 6H2.01L2 21h17.74l2 2l1.41-1.41z");
}
</style><path class="wi0cxlble"/>`,
		"fallback": "ic:sharp-work-off",
	});
}

export default Component;
