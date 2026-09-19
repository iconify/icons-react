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
		"content": `<style>.nbnyb-bik {
  fill: currentColor;
  d: path("m17 4l4 4l-4 4V9h-4V7h4zM7 17h4v-2H7v-3l-4 4l4 4zm12-2h-2v2h2zm-4 0h-2v2h2zm-4-8H9v2h2zM7 7H5v2h2z");
}
</style><path class="nbnyb-bik"/>`,
		"fallback": "ic:sharp-multiple-stop",
	});
}

export default Component;
