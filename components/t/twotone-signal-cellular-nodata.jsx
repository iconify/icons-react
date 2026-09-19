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
		"content": `<style>.xd0xe4a_z {
  fill: currentColor;
  d: path("M22 13h-9v9H2L22 2zm-1 2.41L19.59 14l-2.09 2.09L15.41 14L14 15.41l2.09 2.09L14 19.59L15.41 21l2.09-2.08L19.59 21L21 19.59l-2.08-2.09z");
}
</style><path class="xd0xe4a_z"/>`,
		"fallback": "ic:twotone-signal-cellular-nodata",
	});
}

export default Component;
