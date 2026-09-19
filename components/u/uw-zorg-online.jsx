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
		"content": `<style>.h0j8b3tmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.5 18H30v-6.5c0-3.3-2.7-6-6-6s-6 2.7-6 6V18h-6.5c-3.3 0-6 2.7-6 6h0c0 3.3 2.7 6 6 6H18v6.5c0 3.3 2.7 6 6 6s6-2.7 6-6V30h6.5c3.3 0 6-2.7 6-6h0c0-3.3-2.7-6-6-6");
}

.tlsbkt65n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 18c-6.627 0-12 5.373-12 12");
}
</style><path class="h0j8b3tmd"/><path class="tlsbkt65n"/>`,
		"fallback": "arcticons:uw-zorg-online",
	});
}

export default Component;
