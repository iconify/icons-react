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
		"content": `<style>.omf6sab1k {
  fill: currentColor;
  d: path("M3 21L21 3v18zm6.289-1H20V5.427L9.289 16.139z");
}
</style><path class="omf6sab1k"/>`,
		"fallback": "material-symbols-light:signal-cellular-1-bar-sharp",
	});
}

export default Component;
