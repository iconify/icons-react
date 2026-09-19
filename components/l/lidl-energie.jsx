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
		"content": `<style>.kr_gp_m1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.94 25.821l9.316-9.376l5.67 5.634l-1.164 1.172l-6.623 6.666l-1.529 1.54z");
}

.rwy5e6gdq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.797 23.29l1.796 5.198l-3.573 3.648l-4.858-2.193m-5.606-5.886l-6.073-5.974m12.007-.113l-5.945-5.872");
}

.w0qb0xl3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.639 40.688c4.8-3.944 7.861-9.924 7.861-16.62c0-11.874-9.626-21.5-21.5-21.5s-21.5 9.626-21.5 21.5c0 10.802 7.966 19.743 18.335 21.234c3.24.446 6.082-.251 8.515-2.128q2.34-1.806 3.507-4.76q.937-2.38.032-5.117q-.575-1.735-2.058-3.024");
}
</style><path class="kr_gp_m1t"/><path class="w0qb0xl3w"/><path class="rwy5e6gdq"/>`,
		"fallback": "arcticons:lidl-energie",
	});
}

export default Component;
