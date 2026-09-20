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
		"content": `<style>.o2m4tbbth {
  fill: currentColor;
  d: path("M16 4v1h-1v7.175l-6.04-6.04l-.19-1.325H8V4zm-4 16.5l-.5-.5v-5H7.423v-1L9 12.423v-1.996l-6.139-6.15l.708-.708l16.093 16.093l-.72.707L13.573 15H12.5v5z");
}
</style><path class="o2m4tbbth"/>`,
		"fallback": "material-symbols-light:keep-off-sharp",
	});
}

export default Component;
