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
		"content": `<style>.sxndxzbac {
  fill: currentColor;
  d: path("M21 10V5H3v5H2v9h2v-2h16v2h2v-9zm-8-3h6v3h-6zm-8 3V7h6v3zm-1 5v-3h16v3z");
}
</style><path class="sxndxzbac"/>`,
		"fallback": "ic:sharp-bed",
	});
}

export default Component;
