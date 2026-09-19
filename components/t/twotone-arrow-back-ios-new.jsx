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
		"content": `<style>.i6z77xbiz {
  fill: currentColor;
  d: path("M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z");
}
</style><path class="i6z77xbiz"/>`,
		"fallback": "ic:twotone-arrow-back-ios-new",
	});
}

export default Component;
