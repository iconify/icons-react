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
		"content": `<style>.dekpsje6n {
  fill: currentColor;
  d: path("M14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM13 3h-2.5v14H13zM7 3h2.5v14H7zM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z");
}
</style><path class="dekpsje6n"/>`,
		"fallback": "fluent:layout-column-four-20-filled",
	});
}

export default Component;
