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
		"content": `<style>.kyv1m3q_x {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V3h18v14z");
}
</style><path class="kyv1m3q_x"/>`,
		"fallback": "material-symbols:page-footer-sharp",
	});
}

export default Component;
