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
		"content": `<style>.wglk0eb7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.987 7.08L40.63 40.724M15.98 5.755L5.81 15.925M22.153 5.5l-16.6 16.6m36.637 9.974l-10.17 10.17M42.446 25.9l-16.6 16.6");
}
</style><path class="wglk0eb7y"/>`,
		"fallback": "arcticons:lift-log",
	});
}

export default Component;
