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
		"content": `<style>.e5d5r_bck {
  fill: currentColor;
  d: path("M16 4v1h-1v7.175l-1-1V5h-4v2.175l-1.04-1.04l-.19-1.325H8V4zm-4 16.5l-.5-.5v-5H7.423v-1L9 12.423v-1.996l-6.139-6.15l.708-.708l16.093 16.093l-.72.707L13.573 15H12.5v5zM8.85 14h3.762l-2.6-2.561L10 12.85zm1.162-2.561");
}
</style><path class="e5d5r_bck"/>`,
		"fallback": "material-symbols-light:keep-off-outline",
	});
}

export default Component;
