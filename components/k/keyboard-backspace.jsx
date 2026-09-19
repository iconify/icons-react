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
		"content": `<style>.zrziyib9t {
  fill: currentColor;
  d: path("M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.41L6.83 13H21z");
}
</style><path class="zrziyib9t"/>`,
		"fallback": "ic:keyboard-backspace",
	});
}

export default Component;
