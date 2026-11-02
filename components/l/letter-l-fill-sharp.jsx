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
		"content": `<style>.ixaw-ldqz {
  fill: currentColor;
  d: path("M8 19h9a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0Z");
}
</style><path class="ixaw-ldqz"/>`,
		"fallback": "coolicons:letter-l-fill-sharp",
	});
}

export default Component;
