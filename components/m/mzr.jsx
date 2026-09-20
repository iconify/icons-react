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
		"content": `<style>.gk4phcarw {
  fill-rule: evenodd;
  d: path("M20.4 21V3L12 9.84L3.6 3v18l4.2-3.504v-6.354l4.2 3.63l4.2-3.63v6.36zM12 12.816L6.384 8.088v8.556l-1.302.978V6.096L12 11.754zm0 0l5.598-4.728v8.556l1.32.978V6.096L12 11.754zm-2.4 4.848l2.406 2.256l2.394-2.256v-2.778l-2.394 2.28L9.6 14.88z");
}
</style><path clip-rule="evenodd" class="gk4phcarw"/>`,
		"fallback": "token-branded:mzr",
	});
}

export default Component;
