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
		"content": `<style>.gkmrd3b5u {
  fill: currentColor;
  d: path("m18 22l-.01-6L14 12l3.99-4.01L18 2H6v6l4 4l-4 3.99V22zM8 7.5V4h8v3.5l-4 4z");
}
</style><path class="gkmrd3b5u"/>`,
		"fallback": "ic:sharp-hourglass-bottom",
	});
}

export default Component;
