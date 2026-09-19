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
		"content": `<style>.lj6evoy3v {
  fill: currentColor;
  d: path("M7.5 12.5h1V14h-1zM21 3H3v18h18zm-11 7.5H7.5v1H10V15H6V9h4zm6 4.5h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3zm3-2.5h-1.5V14h-1v-1.5H15v-1h1.5V10h1v1.5H19z");
}
</style><path class="lj6evoy3v"/>`,
		"fallback": "ic:sharp-6k-plus",
	});
}

export default Component;
