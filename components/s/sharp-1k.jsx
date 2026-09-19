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
		"content": `<style>.pc1i52siu {
  fill: currentColor;
  d: path("M21 3H3v18h18zM10 15H8.5v-4.5H7V9h3zm7 0h-1.75l-1.75-2.25V15H12V9h1.5v2.25L15.25 9H17l-2.25 3z");
}
</style><path class="pc1i52siu"/>`,
		"fallback": "ic:sharp-1k",
	});
}

export default Component;
