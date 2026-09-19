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
		"content": `<style>.epyxv7bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.669 17.985l-3.874 17.846m4.754-17.846l3.874 17.846m.448-15.108a6.735 6.735 0 1 0-9.524 0");
}

.n6p3_zbiq {
  cx: 24.109px;
  cy: 15.96px;
  r: 2.072px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rdpskkbzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.213 24.064a11.46 11.46 0 1 0-16.208 0m6.528-.827h3.152m-4.08 4.227h5.008m-6.142 5.273h7.276m-14.924-2.048l7.016-.785l7.468.785l8.044-.392l5.534 12.462l-12.157.741l-11.678-1.743l-9.935 1.482z");
}
</style><circle class="n6p3_zbiq"/><path class="epyxv7bcj"/><path class="rdpskkbzr"/>`,
		"fallback": "arcticons:opensignal",
	});
}

export default Component;
