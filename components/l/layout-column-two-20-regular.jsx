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
		"content": `<style>.pvlnqtbaa {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h3.5v12H6a2 2 0 0 1-2-2zm6.5 10V4H14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z");
}
</style><path class="pvlnqtbaa"/>`,
		"fallback": "fluent:layout-column-two-20-regular",
	});
}

export default Component;
