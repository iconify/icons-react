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
		"content": `<style>.af7xl6bdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 11.6A12.4 12.4 0 0 0 11.6 24h0v5.64a6.76 6.76 0 0 0 6.76 6.76H24A12.4 12.4 0 0 0 36.4 24h0A12.4 12.4 0 0 0 24 11.6M31.1 24a7.1 7.1 0 0 1-7.1 7.1h-4.63a2.45 2.45 0 0 1-2.47-2.45V24a7.1 7.1 0 0 1 7.1-7.1h0a7.1 7.1 0 0 1 7.1 7.1");
}

.rx_w8oggy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24A18.51 18.51 0 0 1 24 42.53H10.57a5.08 5.08 0 0 1-5.07-5.08V24A18.5 18.5 0 0 1 24 5.47h0A18.51 18.51 0 0 1 42.5 24");
}
</style><path class="rx_w8oggy"/><path class="af7xl6bdy"/>`,
		"fallback": "arcticons:linebit",
	});
}

export default Component;
