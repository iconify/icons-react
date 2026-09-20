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
		"content": `<style>.ltimzbb8b {
  fill: currentColor;
  d: path("M7.462 20H5.845V6.385h3.77V3h4.769v3.385h3.769V20h-1.616v.23q0 .31-.23.54t-.539.23t-.54-.23t-.229-.54V20H9v.23q0 .31-.23.54t-.54.23t-.539-.23t-.23-.54zm2.154-2.77h1V9.155h-1zm3.769 0h1V9.155h-1zm-2.77-10.846h2.77V4h-2.77z");
}
</style><path class="ltimzbb8b"/>`,
		"fallback": "material-symbols-light:luggage-sharp",
	});
}

export default Component;
