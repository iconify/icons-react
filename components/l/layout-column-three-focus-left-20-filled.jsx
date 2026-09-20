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
		"content": `<style>.bf94_qbnb {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm9 10V4H8v12zm1 0h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1z");
}
</style><path class="bf94_qbnb"/>`,
		"fallback": "fluent:layout-column-three-focus-left-20-filled",
	});
}

export default Component;
