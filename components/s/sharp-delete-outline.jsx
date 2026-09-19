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
		"content": `<style>.zg17xbcfe {
  fill: currentColor;
  d: path("M6 21h12V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z");
}
</style><path class="zg17xbcfe"/>`,
		"fallback": "ic:sharp-delete-outline",
	});
}

export default Component;
