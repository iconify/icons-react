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
		"content": `<style>.g6okgmunl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.488 33.95l8.978 9.55V24.4zm29.024-14.083L23.383 35.235V4.5z");
}
</style><path class="g6okgmunl"/>`,
		"fallback": "arcticons:ptt-blue-card",
	});
}

export default Component;
