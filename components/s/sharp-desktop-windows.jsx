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
		"content": `<style>.jio770bgp {
  fill: currentColor;
  d: path("M23 2H1v16h9v2H8v2h8v-2h-2v-2h9zm-2 14H3V4h18z");
}
</style><path class="jio770bgp"/>`,
		"fallback": "ic:sharp-desktop-windows",
	});
}

export default Component;
