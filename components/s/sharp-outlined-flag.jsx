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
		"content": `<style>.g4tcmykbx {
  fill: currentColor;
  d: path("m14 6l-1-2H5v17h2v-7h5l1 2h7V6zm4 8h-4l-1-2H7V6h5l1 2h5z");
}
</style><path class="g4tcmykbx"/>`,
		"fallback": "ic:sharp-outlined-flag",
	});
}

export default Component;
