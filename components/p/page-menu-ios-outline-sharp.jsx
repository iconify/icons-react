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
		"content": `<style>.arir_fbwn {
  fill: currentColor;
  d: path("M4 20v-1h10.366v1zm0-3.384v-1h16v1zm0-3.385V4h16v9.23zm1-1h14V5H5zm0 0V5z");
}
</style><path class="arir_fbwn"/>`,
		"fallback": "material-symbols-light:page-menu-ios-outline-sharp",
	});
}

export default Component;
