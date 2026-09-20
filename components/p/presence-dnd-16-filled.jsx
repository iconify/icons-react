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
		"content": `<style>.oglyhrbos {
  fill: currentColor;
  d: path("M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M5.249 7h5.5a1 1 0 1 1 0 2h-5.5a1 1 0 1 1 0-2");
}
</style><path class="oglyhrbos"/>`,
		"fallback": "fluent:presence-dnd-16-filled",
	});
}

export default Component;
