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
		"content": `<style>.w1jyo18xm {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h6v12H6a2 2 0 0 1-2-2zm9 10V4h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z");
}
</style><path class="w1jyo18xm"/>`,
		"fallback": "fluent:layout-column-one-third-right-20-regular",
	});
}

export default Component;
