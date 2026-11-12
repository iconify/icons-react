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
		"content": `<style>.l_y0nob3r {
  fill: currentColor;
  d: path("M7 4h10a5 5 0 0 1 5 5v4H2V9a5 5 0 0 1 5-5m4 16H7a5 5 0 0 1-5-5h9Zm11-5a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20h-4v-5Z");
}
</style><path class="l_y0nob3r"/>`,
		"fallback": "coolicons:touchpad-fill-round",
	});
}

export default Component;
