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
		"content": `<style>.g3xvwy7xh {
  fill: currentColor;
  d: path("M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-8-2l4-8V5h-6v2h4l-4 8z");
}
</style><path class="g3xvwy7xh"/>`,
		"fallback": "ic:sharp-filter-7",
	});
}

export default Component;
