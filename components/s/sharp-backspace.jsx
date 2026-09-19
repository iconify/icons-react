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
		"content": `<style>.ytc7-xb_k {
  fill: currentColor;
  d: path("M24 3H6l-6 9l6 9h18zm-5 12.59L17.59 17L14 13.41L10.41 17L9 15.59L12.59 12L9 8.41L10.41 7L14 10.59L17.59 7L19 8.41L15.41 12z");
}
</style><path class="ytc7-xb_k"/>`,
		"fallback": "ic:sharp-backspace",
	});
}

export default Component;
