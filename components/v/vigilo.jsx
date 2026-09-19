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
		"content": `<style>.osmo_tb1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.463 24.285l-3.653 3.653c2.747 2.747 5.786-1.506 8.468 1.176c1.771 1.772 1.947 4.954.328 6.572m-1.99-14.554l8.272 8.272m-14.577-8.272l-8.273 8.273");
}

.t-im65oqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.327 36.693L6.213 19.58a5.85 5.85 0 0 1 8.272-8.272l12.978 12.978l6.052-6.052a5.85 5.85 0 0 1 8.272 8.272L31.599 36.693a5.85 5.85 0 0 1-8.272 0");
}
</style><path class="t-im65oqs"/><path class="osmo_tb1y"/>`,
		"fallback": "arcticons:vigilo",
	});
}

export default Component;
