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
		"content": `<style>.rjel2mb-r {
  fill: currentColor;
  d: path("M2 7h4v10H2zm5 12h10V5H7zM9 7h6v10H9zm9 0h4v10h-4z");
}
</style><path class="rjel2mb-r"/>`,
		"fallback": "ic:outline-view-carousel",
	});
}

export default Component;
