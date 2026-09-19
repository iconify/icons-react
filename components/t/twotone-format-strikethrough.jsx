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
		"content": `<style>.rewx-801w {
  fill: currentColor;
  d: path("M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z");
}
</style><path class="rewx-801w"/>`,
		"fallback": "ic:twotone-format-strikethrough",
	});
}

export default Component;
