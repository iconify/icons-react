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
		"content": `<style>.k4ajyobjn {
  fill: currentColor;
  d: path("m21.42 6.34l-3.75-3.75l-3.82 3.82l-1.94-1.91l-1.41 1.41l1.42 1.42L3 16.25V21h4.75l8.92-8.92l1.42 1.42l1.41-1.41l-1.92-1.92zM6.92 19L5 17.08l8.06-8.06l1.92 1.92z");
}
</style><path class="k4ajyobjn"/>`,
		"fallback": "ic:sharp-colorize",
	});
}

export default Component;
