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
		"content": `<style>.gsbh35b3k {
  fill: currentColor;
  d: path("M16 9h-2.55V6h-2.9v3H8l4 4zm3-6H4.99C3.88 3 3 3.9 3 5v14c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5l-.01-9H19z");
}
</style><path class="gsbh35b3k"/>`,
		"fallback": "ic:outline-move-to-inbox",
	});
}

export default Component;
