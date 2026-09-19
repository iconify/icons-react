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
		"content": `<style>.d7zzzxb4g {
  fill: currentColor;
  d: path("M3 5H1v18h18v-2H3zm12 10h2V5h-2v4h-2V5h-2v6h4zm8-14H5v18h18zm-2 16H7V3h14z");
}
</style><path class="d7zzzxb4g"/>`,
		"fallback": "ic:sharp-filter-4",
	});
}

export default Component;
