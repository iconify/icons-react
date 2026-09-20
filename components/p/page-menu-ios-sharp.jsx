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
		"content": `<style>.oanbrlyws {
  fill: currentColor;
  d: path("M4 20v-1h10.366v1zm0-3.384v-1h16v1zm0-3.385V4h16v9.23z");
}
</style><path class="oanbrlyws"/>`,
		"fallback": "material-symbols-light:page-menu-ios-sharp",
	});
}

export default Component;
