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
		"content": `<style>.ocqenqb6n {
  fill: currentColor;
  d: path("M24.5 15a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5h-8a2.5 2.5 0 0 1-2.5-2.5v-6a2.5 2.5 0 0 1 2.5-2.5zM22.251 3a3.75 3.75 0 0 1 3.75 3.75v7.396A3.5 3.5 0 0 0 25 14h-8.5a3.5 3.5 0 0 0-3.5 3.5V23H5.754a3.75 3.75 0 0 1-3.75-3.75V6.75A3.75 3.75 0 0 1 5.754 3z");
}
</style><path class="ocqenqb6n"/>`,
		"fallback": "fluent:picture-in-picture-28-filled",
	});
}

export default Component;
