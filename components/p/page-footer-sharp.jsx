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
		"content": `<style>.d45ndv4vp {
  fill: currentColor;
  d: path("M4 20v-1h16v1zm0-3.384V4h16v12.616z");
}
</style><path class="d45ndv4vp"/>`,
		"fallback": "material-symbols-light:page-footer-sharp",
	});
}

export default Component;
