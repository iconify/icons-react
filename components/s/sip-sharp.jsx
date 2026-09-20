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
		"content": `<style>.l7-e4p9pt {
  fill: currentColor;
  d: path("M11 15h2V9h-2zm3 0h1.5v-2H19V9h-5zm-9 0h5v-3.75H6.5v-.75H10V9H5v3.75h3.5v.75H5zm10.5-3.5v-1h2v1zM2 20V4h20v16z");
}
</style><path class="l7-e4p9pt"/>`,
		"fallback": "material-symbols:sip-sharp",
	});
}

export default Component;
