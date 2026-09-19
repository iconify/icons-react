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
		"content": `<style>.h7ix-fbmf {
  fill: currentColor;
  d: path("M23 20V4H1v16zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5z");
}
</style><path class="h7ix-fbmf"/>`,
		"fallback": "ic:sharp-panorama",
	});
}

export default Component;
