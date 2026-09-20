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
		"content": `<style>.wlvy9xbyf {
  fill: currentColor;
  d: path("M5.75 3a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM2.72 5.72a.75.75 0 0 1 1.06 1.06l-.97.97l.97.97a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06z");
}
</style><path class="wlvy9xbyf"/>`,
		"fallback": "fluent:text-indent-decrease-16-filled",
	});
}

export default Component;
