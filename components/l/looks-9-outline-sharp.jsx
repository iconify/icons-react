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
		"content": `<style>.ofy7-i9sk {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zm5.5-2.5h4v-9h-5v5h4v3h-3zm3-5h-3v-3h3z");
}
</style><path class="ofy7-i9sk"/>`,
		"fallback": "material-symbols-light:looks-9-outline-sharp",
	});
}

export default Component;
