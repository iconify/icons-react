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
		"content": `<style>.d5ltb1bxy {
  fill: currentColor;
  d: path("M4 20v-4.75h6.616V20zm9.366 0v-4.75H20V20zM4 12.5V4h16v8.5z");
}
</style><path class="d5ltb1bxy"/>`,
		"fallback": "material-symbols-light:tile-large-sharp",
	});
}

export default Component;
