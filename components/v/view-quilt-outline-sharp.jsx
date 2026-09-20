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
		"content": `<style>.l5zghobyw {
  fill: currentColor;
  d: path("M4 18V6h16v12zm5.94-6.5H19V7H9.94zm5.024 5.5H19v-4.5h-4.036zM9.94 17h4.022v-4.5h-4.02zM5 17h3.94V7H5z");
}
</style><path class="l5zghobyw"/>`,
		"fallback": "material-symbols-light:view-quilt-outline-sharp",
	});
}

export default Component;
