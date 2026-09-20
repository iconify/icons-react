import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jr27i_x_d {
  fill: currentColor;
  d: path("M5.754 4a3.75 3.75 0 0 0-3.75 3.75v12.5A3.75 3.75 0 0 0 5.754 24h8.111A7.5 7.5 0 0 1 26 15.401V7.75A3.75 3.75 0 0 0 22.25 4zM27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z");
}
</style><path class="jr27i_x_d"/>`,
		"fallback": "fluent:slide-add-28-filled",
	});
}

export default Component;
