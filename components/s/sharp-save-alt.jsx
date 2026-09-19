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
		"content": `<style>.wlwupcc-e {
  fill: currentColor;
  d: path("M19 12v7H5v-7H3v9h18v-9zm-6 .67l2.59-2.58L17 11.5l-5 5l-5-5l1.41-1.41L11 12.67V3h2z");
}
</style><path class="wlwupcc-e"/>`,
		"fallback": "ic:sharp-save-alt",
	});
}

export default Component;
