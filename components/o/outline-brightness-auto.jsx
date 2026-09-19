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
		"content": `<style>.gq-648z_i {
  fill: currentColor;
  d: path("m11 7l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L13 7zm-.15 5.65L12 9l1.15 3.65zM20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12zm-2 5.79V18h-3.52L12 20.48L9.52 18H6v-3.52L3.52 12L6 9.52V6h3.52L12 3.52L14.48 6H18v3.52L20.48 12z");
}
</style><path class="gq-648z_i"/>`,
		"fallback": "ic:outline-brightness-auto",
	});
}

export default Component;
