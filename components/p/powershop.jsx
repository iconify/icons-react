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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zmwlc1o4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.22 29.83c2.14 3.53 6.16 5.91 10.78 5.91s8.64-2.38 10.78-5.91m-23.56-8.61l8.77-8.17m8.02 0l8.77 8.17");
}
</style><circle class="cpk0fnbgt"/><path class="zmwlc1o4x"/>`,
		"fallback": "arcticons:powershop",
	});
}

export default Component;
