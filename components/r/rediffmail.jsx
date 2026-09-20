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
		"content": `<style>.h2w9jyb9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.373 23.74c.47-5.671 5.223-10.125 11.012-10.125a11.025 11.025 0 0 1 10.947 9.644");
}

.ka7bnqwxn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.555 19.647L24 31.073L7.445 19.647");
}

.ptbs05mpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.555 19.647V42.5H7.445V19.647m33.11 0L24 5.5L7.445 19.647");
}

.t_b6mmbov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.1 24.92a4.566 4.566 0 0 1 4.552-4.553m-4.549 10.091V20.365");
}
</style><path class="ptbs05mpr"/><path class="h2w9jyb9l"/><path class="ka7bnqwxn"/><path class="t_b6mmbov"/>`,
		"fallback": "arcticons:rediffmail",
	});
}

export default Component;
