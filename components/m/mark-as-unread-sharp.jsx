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
		"content": `<style>.ju09_2x7o {
  fill: currentColor;
  d: path("M3 16.616V7l8-4l8.896 4.539h-2.182L11 4.135L4 7.61v9.006zM5.77 20V9.308H21V20zm7.615-5.265L20 11.385v-1.077l-6.616 3.35l-6.615-3.35v1.077z");
}
</style><path class="ju09_2x7o"/>`,
		"fallback": "material-symbols-light:mark-as-unread-sharp",
	});
}

export default Component;
