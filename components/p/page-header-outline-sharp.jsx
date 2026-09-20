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
		"content": `<style>.d8lyp9b7s {
  fill: currentColor;
  d: path("M4 5V4h16v1zm0 15V7.385h16V20zm1-1h14V8.385H5zm0 0V8.385z");
}
</style><path class="d8lyp9b7s"/>`,
		"fallback": "material-symbols-light:page-header-outline-sharp",
	});
}

export default Component;
