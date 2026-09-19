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
		"content": `<style>.cbrlgqv_i {
  fill: currentColor;
  d: path("M11 17h10v-2H11zm-8-5l4 4V8zm0 9h18v-2H3zM3 3v2h18V3zm8 6h10V7H11zm0 4h10v-2H11z");
}
</style><path class="cbrlgqv_i"/>`,
		"fallback": "ic:outline-format-indent-decrease",
	});
}

export default Component;
