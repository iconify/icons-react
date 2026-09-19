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
		"content": `<style>.snz1_usas {
  fill: currentColor;
  d: path("M18 10V5H6v5H4v7h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-7zm-7 0H8V7h3zm5 0h-3V7h3z");
}
</style><path class="snz1_usas"/>`,
		"fallback": "ic:sharp-single-bed",
	});
}

export default Component;
