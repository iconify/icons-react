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
		"content": `<style>.qh1_x1bmc {
  fill: currentColor;
  d: path("M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v3H5V5zm-5 14h-5v-9h5zM5 10h3v9H5zm12 9v-9h3v9z");
}
</style><path class="qh1_x1bmc"/>`,
		"fallback": "ic:outline-table-chart",
	});
}

export default Component;
