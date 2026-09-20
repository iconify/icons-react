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
		"content": `<style>.xt2c4-bbk {
  fill: currentColor;
  d: path("M7 16h10q1.65 0 2.825-1.175T21 12t-1.175-2.825T17 8H7Q5.35 8 4.175 9.175T3 12t1.175 2.825T7 16m2.5-9h5V5.808h-5zM7 19v-2q-2.077 0-3.538-1.457T2 12.005T3.458 8.46T7 7h1.5V4.808h7V7H17q2.083 0 3.542 1.457T22 11.995t-1.458 3.544Q19.083 17 17 17v2h-1v-2H8v2z");
}
</style><path class="xt2c4-bbk"/>`,
		"fallback": "material-symbols-light:propane-outline-sharp",
	});
}

export default Component;
