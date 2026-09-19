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
		"content": `<style>.qwn9s_wmz {
  fill: currentColor;
  d: path("M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9zm8 4v2h2v2h-5V9h7V7h-9v10h9v-6z");
}
</style><path class="qwn9s_wmz"/>`,
		"fallback": "ic:sharp-4g-mobiledata",
	});
}

export default Component;
