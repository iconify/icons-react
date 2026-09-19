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
		"content": `<style>.d3ciaunii {
  fill: currentColor;
  d: path("M16.23 7h2.6c-.06-.47-.36-.94-.79-1.17L10.5 2L2.8 5.83c-.48.26-.8.81-.8 1.34V15c0 1.1.9 2 2 2V7.4L10.5 4z");
}

.nvz5vg2ir {
  fill: currentColor;
  d: path("M20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m0 11H7v-7l6.5 3.33L20 12zm-6.5-5.67L7 10h13z");
}
</style><path class="d3ciaunii"/><path class="nvz5vg2ir"/>`,
		"fallback": "ic:outline-mark-as-unread",
	});
}

export default Component;
