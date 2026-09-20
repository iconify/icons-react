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
		"content": `<style>.fg_xbwrwt {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v5h18v-5A3.25 3.25 0 0 0 17.75 3zM21 12.75h-8.25V21h5A3.25 3.25 0 0 0 21 17.75zm-9.75 0H3v5A3.25 3.25 0 0 0 6.25 21h5z");
}
</style><path class="fg_xbwrwt"/>`,
		"fallback": "fluent:layout-row-two-split-bottom-24-filled",
	});
}

export default Component;
