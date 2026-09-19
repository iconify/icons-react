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
		"content": `<style>.mmin1hbsd {
  fill: currentColor;
  d: path("M13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5h-2v-3h2zm8-2v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4m-1.5 0h-2v-1h2zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5z");
}
</style><path class="mmin1hbsd"/>`,
		"fallback": "ic:twotone-hdr-on",
	});
}

export default Component;
