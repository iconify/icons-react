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
		"content": `<style>.e9gqtfbgf {
  fill: currentColor;
  d: path("M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z");
}

.kdmnkfbpw {
  fill: currentColor;
  d: path("m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z");
}
</style><path class="e9gqtfbgf"/><path class="kdmnkfbpw"/>`,
		"fallback": "ic:outline-keyboard-double-arrow-down",
	});
}

export default Component;
