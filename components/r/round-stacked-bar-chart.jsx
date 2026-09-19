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
		"content": `<style>.h0jtq_b-h {
  fill: currentColor;
  d: path("M6 20c1.1 0 2-.9 2-2V9H4v9c0 1.1.9 2 2 2M4 8h4V6c0-1.1-.9-2-2-2s-2 .9-2 2zm6 3h4V9c0-1.1-.9-2-2-2s-2 .9-2 2zm6 1v2h4v-2c0-1.1-.9-2-2-2s-2 .9-2 2m2 8c1.1 0 2-.9 2-2v-3h-4v3c0 1.1.9 2 2 2m-6 0c1.1 0 2-.9 2-2v-6h-4v6c0 1.1.9 2 2 2");
}
</style><path class="h0jtq_b-h"/>`,
		"fallback": "ic:round-stacked-bar-chart",
	});
}

export default Component;
