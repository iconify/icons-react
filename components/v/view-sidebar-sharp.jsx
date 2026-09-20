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
		"content": `<style>.w0pukz8vh {
  fill: currentColor;
  d: path("M17 9V5h4v4zm0 5v-4h4v4zM3 19V5h13v14zm14 0v-4h4v4z");
}
</style><path class="w0pukz8vh"/>`,
		"fallback": "material-symbols-light:view-sidebar-sharp",
	});
}

export default Component;
