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
		"content": `<style>.qgn5573_u {
  fill: currentColor;
  d: path("m17.442 20.289l-.707-.689l2.075-2.1h-4.868v-1h4.868l-2.075-2.1l.707-.688L20.731 17zM13.27 21q-2.296 0-3.908-1.602T7.75 15.5v-.517q-1.9-.177-3.2-1.6q-1.3-1.421-1.3-3.383V4.5h3v-1h1v3h-1v-1h-2V10q0 1.65 1.175 2.825T8.25 14t2.825-1.175T12.25 10V5.5h-2v1h-1v-3h1v1h3V10q0 1.962-1.3 3.384t-3.2 1.599v.517q0 1.875 1.318 3.188Q11.386 20 13.269 20z");
}
</style><path class="qgn5573_u"/>`,
		"fallback": "material-symbols-light:stethoscope-arrow",
	});
}

export default Component;
