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
		"content": `<style>.gtux8y-da {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.237 14.631h6.892V42.5H9.237z");
}

.l6yx-gidj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.531 14.102C36.525 9.028 31.863 5.5 26.69 5.5H9.237v5.952h16.925c2.679 0 4.898 2.104 4.947 4.69c.03 1.59-.71 3.07-2.052 4.024c-.832.592-1.856.853-2.877.853h-6.447a.424.424 0 0 0-.425.424v5.29l.08.248L30.576 42.5h8.188L27.551 26.939c6.337-.319 11.286-6.256 9.98-12.837");
}
</style><path class="gtux8y-da"/><path class="l6yx-gidj"/>`,
		"fallback": "arcticons:revolut",
	});
}

export default Component;
