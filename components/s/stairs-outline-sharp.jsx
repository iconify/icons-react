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
		"content": `<style>.i4d-2gbue {
  fill: currentColor;
  d: path("M6.5 17.5h3.425v-3.325H12.5V10.85h2.575V7.5H17.5v-1h-3.425v3.325H11.5v3.325H8.925v3.35H6.5zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="i4d-2gbue"/>`,
		"fallback": "material-symbols-light:stairs-outline-sharp",
	});
}

export default Component;
