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
		"content": `<style>.uq220ihex {
  fill: currentColor;
  d: path("M4 18V6h4.825v12zm5.594 0V6H14.4v12zm5.575 0V6h4.825v12z");
}
</style><path class="uq220ihex"/>`,
		"fallback": "material-symbols-light:view-column-sharp",
	});
}

export default Component;
