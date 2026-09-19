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
		"content": `<style>.ds--j-b0x {
  fill: currentColor;
  d: path("m13 5.83l1.59 1.59L16 6l-4-4l-4 4l1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0z");
}
</style><path class="ds--j-b0x"/>`,
		"fallback": "ic:sharp-swipe-up-alt",
	});
}

export default Component;
