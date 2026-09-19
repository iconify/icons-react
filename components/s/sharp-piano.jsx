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
		"content": `<style>.ekhohtbhu {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-8 11.5h1.25V19h-4.5v-4.5H11V5h2zM5 5h2v9.5h1.25V19H5zm14 14h-3.25v-4.5H17V5h2z");
}
</style><path class="ekhohtbhu"/>`,
		"fallback": "ic:sharp-piano",
	});
}

export default Component;
