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
		"content": `<style>.iszcfc_ec {
  fill: currentColor;
  d: path("M18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm11.5.41L21.09 15L19 17.09L16.91 15l-1.41 1.41l2.09 2.09l-2.09 2.09L16.91 22L19 19.91L21.09 22l1.41-1.41l-2.09-2.09z");
}
</style><path class="iszcfc_ec"/>`,
		"fallback": "ic:twotone-remove-road",
	});
}

export default Component;
