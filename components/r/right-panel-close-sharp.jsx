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
		"content": `<style>.p7e0iacuy {
  fill: currentColor;
  d: path("M8.404 15.173L11.596 12L8.404 8.827zM5 19h10V5H5zm-1 1V4h16v16z");
}
</style><path class="p7e0iacuy"/>`,
		"fallback": "material-symbols-light:right-panel-close-sharp",
	});
}

export default Component;
