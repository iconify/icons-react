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
		"content": `<style>.p-3-tdb8x {
  fill: currentColor;
  d: path("M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zM13 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm-3 0a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zm-3 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z");
}
</style><path class="p-3-tdb8x"/>`,
		"fallback": "fluent:textbox-vertical-20-filled",
	});
}

export default Component;
