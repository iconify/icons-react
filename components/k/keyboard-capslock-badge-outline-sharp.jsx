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
		"content": `<style>.nufn-tb0d {
  fill: currentColor;
  d: path("M7 17h10v-2H7zm1.4-4L12 9.4l3.6 3.6l1.4-1.4l-5-5l-5 5zM3 21V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="nufn-tb0d"/>`,
		"fallback": "material-symbols:keyboard-capslock-badge-outline-sharp",
	});
}

export default Component;
