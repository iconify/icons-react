import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g-kbwbbzf {
  fill: currentColor;
  d: path("M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5zM11.5 3A1.5 1.5 0 0 1 13 4.5H3A1.5 1.5 0 0 1 4.5 3zM3 8.5h10v2H3zm0-1v-2h10v2zM4.5 13A1.5 1.5 0 0 1 3 11.5h10a1.5 1.5 0 0 1-1.5 1.5z");
}
</style><path class="g-kbwbbzf"/>`,
		"fallback": "fluent:layout-row-four-16-regular",
	});
}

export default Component;
