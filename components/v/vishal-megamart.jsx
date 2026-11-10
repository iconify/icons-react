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
		"content": `<style>.p4vhc2_6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.605 9.764h9.254L24.214 42.5L6.14 9.764h9.682l8.136 15.254z");
}

.q1cq2tbjy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.377 5.5L23.96 19L16.623 5.5z");
}
</style><path class="p4vhc2_6q"/><path class="q1cq2tbjy"/>`,
		"fallback": "arcticons:vishal-megamart",
	});
}

export default Component;
