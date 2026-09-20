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
		"content": `<style>.cw8lvmpov {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h3V3zm7 10a1.5 1.5 0 0 0 1.5-1.5v-3H8.5V13zM13 7.5v-3A1.5 1.5 0 0 0 11.5 3h-3v4.5z");
}
</style><path class="cw8lvmpov"/>`,
		"fallback": "fluent:layout-column-two-split-right-16-regular",
	});
}

export default Component;
