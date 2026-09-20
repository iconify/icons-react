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
		"content": `<style>.wifxswydx {
  fill: currentColor;
  d: path("M15.002 11.5h3.979V7h-3.979zm-4.985 0h3.98V7h-3.98zm-4.978 0h3.978V7H5.04zm0 5.5h3.978v-4.5H5.04zm4.978 0h3.98v-4.5h-3.98zm4.985 0h3.979v-4.5h-3.979zM4.039 18V6H19.98v12z");
}
</style><path class="wifxswydx"/>`,
		"fallback": "material-symbols-light:view-module-outline-sharp",
	});
}

export default Component;
