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
		"content": `<style>.cq_fxd1ux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.46 5.5h-4.77m10.974 0H42.5v2.76M20.148 33.082c1.582.697 3.116.8 6.273-.046l1.6-.43c2.603-.697 4.171-3.285 3.503-5.78s-3.32-3.951-5.924-3.254l-3.2.858c-2.603.697-5.255-.76-5.924-3.255c-.668-2.494.9-5.082 3.503-5.78l1.6-.429c3.157-.845 4.691-.743 6.273-.046m14.648-.38v4.768m0 6.547V38.5a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4V9.494a3.994 3.994 0 0 1 4-3.994h12.497");
}
</style><path class="cq_fxd1ux"/>`,
		"fallback": "arcticons:snapedit",
	});
}

export default Component;
