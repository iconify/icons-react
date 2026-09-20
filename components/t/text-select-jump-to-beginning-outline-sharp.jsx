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
		"content": `<style>.p0umfpbml {
  fill: currentColor;
  d: path("M19 5V3h2v2zm0 16v-2h2v2zM15 5V3h2v2zm0 16v-2h2v2zM11 5V3h2v2zM7 5V3h2v2zm0 16v-2h2v2zm-4 0V3h2v18zm11-5l-4-4l4-4l1.4 1.4l-1.575 1.6H21v2h-7.175l1.575 1.6zm-3 5v-2h2v2z");
}
</style><path class="p0umfpbml"/>`,
		"fallback": "material-symbols:text-select-jump-to-beginning-outline-sharp",
	});
}

export default Component;
