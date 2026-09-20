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
		"content": `<style>.ee9ckpb8r {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14v-5.384H5zm0-6.384h14V5H5zm0 0V5z");
}
</style><path class="ee9ckpb8r"/>`,
		"fallback": "material-symbols-light:scrollable-header-outline-sharp",
	});
}

export default Component;
