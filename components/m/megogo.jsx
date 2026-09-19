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
		"content": `<style>.qz23_o6_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.91 37.634c3.744 0 5.59-3.376 5.59-6.962V17.434c0-4.43-2.848-7.068-5.221-7.068c-3.85 0-10.496 6.54-14.279 6.54s-10.428-6.54-14.278-6.54c-2.374 0-5.222 2.637-5.222 7.068v13.238c0 3.586 1.846 6.962 5.59 6.962z");
}
</style><path class="qz23_o6_x"/>`,
		"fallback": "arcticons:megogo",
	});
}

export default Component;
