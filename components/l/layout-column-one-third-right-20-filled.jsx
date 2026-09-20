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
		"content": `<style>.bgj64vggy {
  fill: currentColor;
  d: path("M13 17h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-1zM12 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6z");
}
</style><path class="bgj64vggy"/>`,
		"fallback": "fluent:layout-column-one-third-right-20-filled",
	});
}

export default Component;
