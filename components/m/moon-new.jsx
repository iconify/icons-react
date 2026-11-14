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
		"content": `<style>.zs_a05bda {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752M4.75 12q0-3.003 2.123-5.127T12 4.75t5.127 2.123Q19.25 8.997 19.25 12t-2.123 5.127T12 19.25t-5.127-2.123Q4.75 15.003 4.75 12M9 10q0 1 1 1t1-1t-1-1t-1 1m5 4.25q0 .5.5.5t.5-.5t-.5-.5t-.5.5");
}
</style><path class="zs_a05bda"/>`,
		"fallback": "uix-solid:moon-new",
	});
}

export default Component;
