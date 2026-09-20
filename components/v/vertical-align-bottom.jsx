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
		"content": `<style>.ccm26ub5x {
  fill: currentColor;
  d: path("M4 21v-2h16v2zm8-4l-5-5l1.4-1.4l2.6 2.6V3h2v10.2l2.6-2.6L17 12z");
}
</style><path class="ccm26ub5x"/>`,
		"fallback": "material-symbols:vertical-align-bottom",
	});
}

export default Component;
