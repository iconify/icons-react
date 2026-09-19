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
		"content": `<style>.g1exsibbv {
  cx: 40.5px;
  cy: 22.466px;
  r: 0.75px;
  fill: currentColor;
}

.uj8mev2_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 9.5H27l-13.243 29L4.5 22.466h10.579m6 0H33.5");
}
</style><path class="uj8mev2_w"/><circle class="g1exsibbv"/>`,
		"fallback": "arcticons:veryfit",
	});
}

export default Component;
