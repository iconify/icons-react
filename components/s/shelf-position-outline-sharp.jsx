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
		"content": `<style>.u0v5varzx {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14v-3.5H5zm11.116-4.5H19V5h-2.884zM5 14.5h2.885V5H5zm3.885 0h6.23V5h-6.23z");
}
</style><path class="u0v5varzx"/>`,
		"fallback": "material-symbols-light:shelf-position-outline-sharp",
	});
}

export default Component;
