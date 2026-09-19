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
		"content": `<style>.d7_jbxdcd {
  fill: currentColor;
  d: path("M18 21h3v-3c-1.66 0-3 1.34-3 3M3 14c6.08 0 11-4.93 11-11h-2a9 9 0 0 1-9 9zm11 7h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7M3 10c3.87 0 7-3.13 7-7H8c0 2.76-2.24 5-5 5zm7 11h2a9 9 0 0 1 9-9v-2c-6.07 0-11 4.93-11 11M3 3v3c1.66 0 3-1.34 3-3z");
}
</style><path class="d7_jbxdcd"/>`,
		"fallback": "ic:twotone-leak-add",
	});
}

export default Component;
