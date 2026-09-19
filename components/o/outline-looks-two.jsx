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
		"content": `<style>.na5f0obfq {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-4-4h-4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9v2h4v2h-2a2 2 0 0 0-2 2v4h6z");
}
</style><path class="na5f0obfq"/>`,
		"fallback": "ic:outline-looks-two",
	});
}

export default Component;
