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
		"content": `<style>.ug3jopbdm {
  fill: currentColor;
  d: path("M8.827 15.596h6.346L12 12.404zM5 19h14V9H5zm-1 1V4h16v16z");
}
</style><path class="ug3jopbdm"/>`,
		"fallback": "material-symbols-light:top-panel-close-sharp",
	});
}

export default Component;
