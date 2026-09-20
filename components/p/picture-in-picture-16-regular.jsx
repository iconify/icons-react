import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w3azgj4wy {
  fill: currentColor;
  d: path("M1 4.5A2.5 2.5 0 0 1 3.5 2h8A2.5 2.5 0 0 1 14 4.5V8h-1V4.5A1.5 1.5 0 0 0 11.5 3h-8A1.5 1.5 0 0 0 2 4.5v5A1.5 1.5 0 0 0 3.5 11H7v1H3.5A2.5 2.5 0 0 1 1 9.5zM9 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z");
}
</style><path class="w3azgj4wy"/>`,
		"fallback": "fluent:picture-in-picture-16-regular",
	});
}

export default Component;
