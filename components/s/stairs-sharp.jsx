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
		"content": `<style>.g9mpf1blt {
  fill: currentColor;
  d: path("M6.5 17.5h3.425v-3.325H12.5V10.85h2.575V7.5H17.5v-1h-3.425v3.325H11.5v3.325H8.925v3.35H6.5zM4 20V4h16v16z");
}
</style><path class="g9mpf1blt"/>`,
		"fallback": "material-symbols-light:stairs-sharp",
	});
}

export default Component;
