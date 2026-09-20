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
		"content": `<style>.ucw1-6bfp {
  fill: currentColor;
  d: path("M7 17q-2.083 0-3.542-1.457T2 12.005T3.458 8.46Q4.917 7 7 7q1.833 0 3.134 1.09q1.3 1.089 1.708 2.68H22v2.46h-2.538V17H17v-3.77h-5.158q-.408 1.591-1.708 2.68T7 17m0-3.77q.508 0 .87-.36t.36-.87t-.36-.87t-.87-.36t-.87.36t-.36.87t.36.87t.87.36");
}
</style><path class="ucw1-6bfp"/>`,
		"fallback": "material-symbols-light:vpn-key",
	});
}

export default Component;
