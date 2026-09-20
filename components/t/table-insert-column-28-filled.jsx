import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ptl4uhbno {
  fill: currentColor;
  d: path("M4.5 3.75a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0zm20.5 0a.75.75 0 0 0-1.5 0v20.5a.75.75 0 0 0 1.5 0zM11.75 3A2.75 2.75 0 0 0 9 5.75V9.5h10V5.75A2.75 2.75 0 0 0 16.25 3zM9 17v-6h10v6zm0 1.5h10v3.75A2.75 2.75 0 0 1 16.25 25h-4.5A2.75 2.75 0 0 1 9 22.25z");
}
</style><path class="ptl4uhbno"/>`,
		"fallback": "fluent:table-insert-column-28-filled",
	});
}

export default Component;
