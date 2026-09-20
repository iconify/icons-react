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
		"content": `<style>.iivqedcba {
  fill: currentColor;
  d: path("M4 20V9h5V4h11v16zm11-1h4V5h-9v4h5zm-5 0h4v-9h-4zm-5 0h4v-9H5zM15 9v1zm0 0");
}
</style><path class="iivqedcba"/>`,
		"fallback": "material-symbols-light:responsive-layout-outline-sharp",
	});
}

export default Component;
