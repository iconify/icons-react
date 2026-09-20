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
		"content": `<style>.tt5qi7utu {
  fill: currentColor;
  d: path("M13 17h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-1zM12 3H8v14h4zM6 3h1v14H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3");
}
</style><path class="tt5qi7utu"/>`,
		"fallback": "fluent:layout-column-three-20-filled",
	});
}

export default Component;
