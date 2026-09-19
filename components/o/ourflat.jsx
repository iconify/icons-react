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
		"content": `<style>.mrsnjbh_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.611 25.028v16.444H38.39V25.028M5.5 24l8.222-6.167V10.64l4.111-4.111l.05 8.29L24 10.282L42.5 24");
}
</style><path class="mrsnjbh_e"/>`,
		"fallback": "arcticons:ourflat",
	});
}

export default Component;
