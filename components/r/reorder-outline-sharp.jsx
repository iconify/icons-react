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
		"content": `<style>.h_uphxbgj {
  fill: currentColor;
  d: path("M4 18v-1h16v1zm0-3.673v-1h16v1zm0-3.654v-1h16v1zM4 7V6h16v1z");
}
</style><path class="h_uphxbgj"/>`,
		"fallback": "material-symbols-light:reorder-outline-sharp",
	});
}

export default Component;
