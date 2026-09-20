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
		"content": `<style>.qbuwhob6a {
  fill: currentColor;
  d: path("M8.827 15.596h6.346L12 12.404zM5 8h14V5H5zm0 11h14V9H5zM5 8V5zM4 20V4h16v16z");
}
</style><path class="qbuwhob6a"/>`,
		"fallback": "material-symbols-light:top-panel-close-outline-sharp",
	});
}

export default Component;
