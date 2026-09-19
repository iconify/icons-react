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
		"content": `<style>.iwjoc7-4n {
  fill: currentColor;
  d: path("M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l1.41 1.41l.59.59H20zm-7.84-6H8v2h4.16l-1.59 1.59L11.99 17L16 13.01L11.99 9l-1.41 1.41z");
}
</style><path class="iwjoc7-4n"/>`,
		"fallback": "ic:outline-drive-file-move",
	});
}

export default Component;
