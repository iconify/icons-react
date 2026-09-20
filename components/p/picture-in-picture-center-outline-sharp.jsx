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
		"content": `<style>.e826usbko {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm0 0V6zm4-3h8V9H8z");
}
</style><path class="e826usbko"/>`,
		"fallback": "material-symbols:picture-in-picture-center-outline-sharp",
	});
}

export default Component;
