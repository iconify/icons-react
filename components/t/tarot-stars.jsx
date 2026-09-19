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
		"content": `<style>.qf99stm5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5L45.5 24L24 45.5L2.5 24z");
}

.s4o090mfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.405 8.405h31.19v31.19H8.405z");
}
</style><path class="s4o090mfm"/><path class="qf99stm5x"/>`,
		"fallback": "arcticons:tarot-stars",
	});
}

export default Component;
