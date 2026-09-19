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
		"content": `<style>.p2fgrym4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25 4.5H10.8v25.8c0 7.3 5.9 13.2 13.2 13.2s13.2-5.9 13.2-13.2V17.7m0-5.3V4.5h-7.6");
}
</style><path class="p2fgrym4i"/>`,
		"fallback": "arcticons:urbansports",
	});
}

export default Component;
