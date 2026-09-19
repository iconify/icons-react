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
		"content": `<style>.p4r-jebrg {
  fill: currentColor;
  d: path("M22 18v-2H8V4h2L7 1L4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3l3-3h-2v-2zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6z");
}
</style><path class="p4r-jebrg"/>`,
		"fallback": "ic:transform",
	});
}

export default Component;
