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
		"content": `<style>.gdu0l2a4x {
  fill: currentColor;
  d: path("M3 15h18v-2H3zm0 4h18v-2H3zm0-8h18V9H3zm0-6v2h18V5z");
}
</style><path class="gdu0l2a4x"/>`,
		"fallback": "ic:outline-reorder",
	});
}

export default Component;
