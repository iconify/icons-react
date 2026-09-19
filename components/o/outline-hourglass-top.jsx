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
		"content": `<style>.u_hxwsbht {
  fill: currentColor;
  d: path("m6 2l.01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4l4-3.99V2zm10 14.5V20H8v-3.5l4-4z");
}
</style><path class="u_hxwsbht"/>`,
		"fallback": "ic:outline-hourglass-top",
	});
}

export default Component;
