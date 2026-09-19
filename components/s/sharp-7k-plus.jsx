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
		"content": `<style>.e9pln-36v {
  fill: currentColor;
  d: path("M21 3H3v18h18zM8.5 15H6.75l1.38-4.5H5.5V9h4.86zm7.5 0h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z");
}
</style><path class="e9pln-36v"/>`,
		"fallback": "ic:sharp-7k-plus",
	});
}

export default Component;
