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
		"content": `<style>.m1x_gze_z {
  fill: currentColor;
  d: path("M22 8V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2v-5H22c0-1.1-.9-2-2-2h-7.17l1.83-1.83l-1.41-1.41C9.69 10.31 10.88 9.12 9 11l4.24 4.24l1.41-1.41L12.83 12H20v5H4V5h16v3z");
}
</style><path class="m1x_gze_z"/>`,
		"fallback": "ic:outline-reset-tv",
	});
}

export default Component;
