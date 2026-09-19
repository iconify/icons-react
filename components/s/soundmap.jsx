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
		"content": `<style>.kf8ba7uzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.352 38.048L5.5 41.229V9.952l9.852-3.181zm27.148 0l-9.852 3.181V9.952L42.5 6.771z");
}

.klolfzp2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.648 41.229l-17.296-3.181V6.771l17.296 3.181z");
}
</style><path class="kf8ba7uzv"/><path class="klolfzp2n"/>`,
		"fallback": "arcticons:soundmap",
	});
}

export default Component;
