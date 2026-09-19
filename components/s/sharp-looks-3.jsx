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
		"content": `<style>.nw_uqfb4x {
  fill: currentColor;
  d: path("M21 3H3.01v18H21zm-5.99 14H9v-2h4v-2h-2v-2h2V9H9V7h6.01z");
}
</style><path class="nw_uqfb4x"/>`,
		"fallback": "ic:sharp-looks-3",
	});
}

export default Component;
