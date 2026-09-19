import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vlluqab7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.385 9.15S12.1 23.335 7.745 30.922c-6.288 10.955 2.324 5.448 5.237 2.517C17.595 28.8 24.885 18.88 27.374 18.34c5.929-1.28-8.007 17.743-3.716 20.122c3.244 1.798 6.06-8.852 9.731-8.982c2.98.176-.35 7.518 9.11 9.37");
}
</style><path class="vlluqab7a"/>`,
		"fallback": "arcticons:walpy",
	});
}

export default Component;
