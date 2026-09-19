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
		"content": `<style>.zc6gletih {
  fill: currentColor;
  d: path("M6 2v6h.01L6 8.01L10 12l-4 4l.01.01H6V22h12v-5.99h-.01L18 16l-4-4l4-3.99l-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5l-4-4V4h8v3.5z");
}
</style><path class="zc6gletih"/>`,
		"fallback": "ic:sharp-hourglass-empty",
	});
}

export default Component;
