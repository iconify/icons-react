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
		"content": `<style>.wg9z6px1d {
  fill: currentColor;
  d: path("M8 4h2L7 1L4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3l3-3h-2v-2h4v-2H8zm10 10V8c0-1.1-.9-2-2-2h-6v2h6v6z");
}
</style><path class="wg9z6px1d"/>`,
		"fallback": "ic:twotone-transform",
	});
}

export default Component;
