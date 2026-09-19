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
		"content": `<style>.nezmv04xn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h37v37m0-37l-37 37M24 24H5.5m37 0L24 42.5");
}
</style><path class="nezmv04xn"/>`,
		"fallback": "arcticons:south-western-railway",
	});
}

export default Component;
