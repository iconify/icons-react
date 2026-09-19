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
		"content": `<style>.f21ig-h_x {
  fill: currentColor;
  d: path("M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z");
}
</style><path class="f21ig-h_x"/>`,
		"fallback": "ic:outline-keyboard-arrow-down",
	});
}

export default Component;
