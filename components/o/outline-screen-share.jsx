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
		"content": `<style>.hq-ssopum {
  fill: currentColor;
  d: path("M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2zM4 16V6h16v10.01zm9-6.87c-3.89.54-5.44 3.2-6 5.87c1.39-1.87 3.22-2.72 6-2.72v2.19l4-3.74L13 7z");
}
</style><path class="hq-ssopum"/>`,
		"fallback": "ic:outline-screen-share",
	});
}

export default Component;
