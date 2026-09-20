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
		"content": `<style>.qpbm6-b1v {
  fill: currentColor;
  d: path("M18 20q0-2.9-1.1-5.45t-3-4.45t-4.45-3T4 6V5q3.108 0 5.838 1.176t4.77 3.216t3.216 4.77T19 20z");
}
</style><path class="qpbm6-b1v"/>`,
		"fallback": "material-symbols-light:line-curve-outline",
	});
}

export default Component;
