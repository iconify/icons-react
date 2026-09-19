import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m16qigbls {
  fill: currentColor;
  d: path("M21 5c0-1.1-.9-2-2-2h-9v5h11zM3 19c0 1.1.9 2 2 2h3V10H3zM3 5v3h5V3H5c-1.1 0-2 .9-2 2m15 3.99L14 13l1.41 1.41l1.59-1.6V15c0 1.1-.9 2-2 2h-2.17l1.59-1.59L13 14l-4 4l4 4l1.41-1.41L12.83 19H15c2.21 0 4-1.79 4-4v-2.18l1.59 1.6L22 13z");
}
</style><path class="m16qigbls"/>`,
		"fallback": "ic:outline-pivot-table-chart",
	});
}

export default Component;
