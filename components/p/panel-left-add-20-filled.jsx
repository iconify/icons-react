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
		"content": `<style>.s-al_tbwa {
  fill: currentColor;
  d: path("M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.207a5.5 5.5 0 0 1-.185-1H8.5V4H15a2 2 0 0 1 2 2v3.6q.538.276 1 .657V6a3 3 0 0 0-3-3zm14 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="s-al_tbwa"/>`,
		"fallback": "fluent:panel-left-add-20-filled",
	});
}

export default Component;
