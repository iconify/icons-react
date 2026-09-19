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
		"content": `<style>.c8f8o9b2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.393 24.902l-5.315-5.013a4.59 4.59 0 0 1 3.71-3.71l5.114 5.114");
}

.tiqcvcb7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.797 26.306l3.555-3.555M42.55 39.04L24.902 21.294l3.91-.802l-5.013-5.014l2.106-6.718l-6.919 1.905l-4.712-5.114l-1.605 6.618l-7.119 1.504l5.214 5.014l-2.306 6.818l7.019-2.005l4.813 5.214l1.103-3.81L38.94 42.45c1.404.2 3.41-2.206 3.61-3.41");
}
</style><path class="tiqcvcb7c"/><path class="c8f8o9b2c"/>`,
		"fallback": "arcticons:secretcodes",
	});
}

export default Component;
