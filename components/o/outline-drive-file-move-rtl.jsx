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
		"content": `<style>.lyznuac9u {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-6.59-2.41L12 17l-4-4l4-4l1.41 1.41L11.83 12H16v2h-4.17z");
}
</style><path class="lyznuac9u"/>`,
		"fallback": "ic:outline-drive-file-move-rtl",
	});
}

export default Component;
