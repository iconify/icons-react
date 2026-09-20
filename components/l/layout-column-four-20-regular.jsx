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
		"content": `<style>.vnw8e9c8b {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2v12a2 2 0 0 1-2-2zm6.5 10V4H13v12zm-1 0H7V4h2.5zm6.5-2a2 2 0 0 1-2 2V4a2 2 0 0 1 2 2z");
}
</style><path class="vnw8e9c8b"/>`,
		"fallback": "fluent:layout-column-four-20-regular",
	});
}

export default Component;
