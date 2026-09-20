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
		"content": `<style>.xwdcovb8d {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.384V4h16v12.616zm1-1h14V5H5zm0 0V5z");
}
</style><path class="xwdcovb8d"/>`,
		"fallback": "material-symbols-light:page-footer-outline-sharp",
	});
}

export default Component;
