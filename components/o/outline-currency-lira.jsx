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
		"content": `<style>.mwnglvbvt {
  fill: currentColor;
  d: path("M9 8.76V3h2v4.51L15 5v2.36l-4 2.51l.01 2.35L15 9.72v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.88v-2.36L6 13v-2.36z");
}
</style><path class="mwnglvbvt"/>`,
		"fallback": "ic:outline-currency-lira",
	});
}

export default Component;
