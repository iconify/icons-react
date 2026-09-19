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
		"content": `<style>.qhwm6rvzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 0 45.5 24h0A21.51 21.51 0 0 0 24 2.5m0 5.22c8.53 0 16.28 7.76 16.28 16.28S32.52 40.28 24 40.28S7.72 32.52 7.72 24S15.47 7.72 24 7.72");
}
</style><path class="qhwm6rvzp"/>`,
		"fallback": "arcticons:kiss",
	});
}

export default Component;
