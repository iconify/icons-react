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
		"content": `<style>.vi47-hbwa {
  fill: currentColor;
  d: path("M22 2v2H2V2zM7 22h3V6H7zm7-6h3V6h-3z");
}
</style><path class="vi47-hbwa"/>`,
		"fallback": "ic:sharp-align-vertical-top",
	});
}

export default Component;
