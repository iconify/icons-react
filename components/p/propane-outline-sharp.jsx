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
		"content": `<style>.z8vxp2bgf {
  fill: currentColor;
  d: path("M7 16h10q1.65 0 2.825-1.175T21 12t-1.175-2.825T17 8H7Q5.35 8 4.175 9.175T3 12t1.175 2.825T7 16m3-10h4V5h-4zM7 21v-3q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6h1V3h8v3h1q2.5 0 4.25 1.75T23 12t-1.75 4.25T17 18v3h-2v-3H9v3z");
}
</style><path class="z8vxp2bgf"/>`,
		"fallback": "material-symbols:propane-outline-sharp",
	});
}

export default Component;
