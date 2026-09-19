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
		"content": `<style>.dcsexnbws {
  fill: currentColor;
  d: path("M13 11v2h2v2h-4V9h6V7H9v10h8v-6zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7z");
}
</style><path class="dcsexnbws"/>`,
		"fallback": "ic:sharp-4g-plus-mobiledata",
	});
}

export default Component;
