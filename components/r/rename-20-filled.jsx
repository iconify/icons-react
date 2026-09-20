import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iu-q0jb9d {
  fill: currentColor;
  d: path("M11.5 2a.5.5 0 0 1 0 1h-1v14h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V3h-1a.5.5 0 0 1 0-1zm-3 14H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3.5zM15 4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3.5V4z");
}
</style><path class="iu-q0jb9d"/>`,
		"fallback": "fluent:rename-20-filled",
	});
}

export default Component;
