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
		"content": `<style>.p_eprobji {
  fill: currentColor;
  d: path("m10.02 18l6-6l-6-6l-1.41 1.41L13.19 12l-4.58 4.59z");
}
</style><path class="p_eprobji"/>`,
		"fallback": "ic:twotone-navigate-next",
	});
}

export default Component;
