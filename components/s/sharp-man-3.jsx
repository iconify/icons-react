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
		"content": `<style>.uw8f57zpo {
  fill: currentColor;
  d: path("M16 7H8v8h2v7h4v-7h2zm-4-5.249L14.248 4L12 6.248L9.75 4z");
}
</style><path class="uw8f57zpo"/>`,
		"fallback": "ic:sharp-man-3",
	});
}

export default Component;
