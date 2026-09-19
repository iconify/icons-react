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
		"content": `<style>.q5_gnccui {
  fill: currentColor;
  d: path("M21.99 6.86L12 1L2 6.86V20h20zM12 13L3.74 7.84L12 3l8.26 4.84z");
}
</style><path class="q5_gnccui"/>`,
		"fallback": "ic:sharp-drafts",
	});
}

export default Component;
