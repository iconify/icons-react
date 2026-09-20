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
		"content": `<style>.hiv_y1eab {
  fill: currentColor;
  d: path("M17 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zM8 16V4h4v12zm-1 0H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1z");
}
</style><path class="hiv_y1eab"/>`,
		"fallback": "fluent:layout-column-three-focus-right-20-filled",
	});
}

export default Component;
