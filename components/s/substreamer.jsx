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
		"content": `<style>.qe9gkb-zf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 9v30M9.375 15.207v17.586m9.75-17.586v17.586M4.5 20.897v6.206M33.75 9v30m-4.875-23.793v17.586m9.75-17.586v17.586M24 20.897v6.206m19.5-6.206v6.206");
}
</style><path class="qe9gkb-zf"/>`,
		"fallback": "arcticons:substreamer",
	});
}

export default Component;
