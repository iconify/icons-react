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
		"content": `<style>.abvojyb6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.172 5.672l8.657 8.657A4 4 0 0 1 38 17.157V41.5a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-35a2 2 0 0 1 2-2h13.343a4 4 0 0 1 2.828 1.172ZM19.05 25.363h4.125m-4.125-2.7h4.125");
}

.xzqfmnb1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.938 28.186a3.689 3.689 0 0 1-6.512-2.374v-3.623a3.69 3.69 0 0 1 3.688-3.689a3.68 3.68 0 0 1 2.835 1.329");
}
</style><path class="abvojyb6y"/><path class="xzqfmnb1d"/>`,
		"fallback": "arcticons:kpn-prepaid",
	});
}

export default Component;
