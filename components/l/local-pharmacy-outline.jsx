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
		"content": `<style>.hzrl-wbvc {
  fill: currentColor;
  d: path("M3 21v-2l2-6l-2-6V5h12.7l1.45-4l2.35.85L18.35 5H21v2l-2 6l2 6v2zm8-4h2v-3h3v-2h-3V9h-2v3H8v2h3zm-5.9 2h13.8l-2-6l2-6H5.1l2 6zm6.9-6");
}
</style><path class="hzrl-wbvc"/>`,
		"fallback": "material-symbols:local-pharmacy-outline",
	});
}

export default Component;
