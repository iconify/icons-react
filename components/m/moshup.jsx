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
		"content": `<style>.gx_dm4b2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h8.597L24 21.062L33.904 5.5H42.5v37H31.4V30.109L24 41.738l-7.4-11.629V42.5H5.5z");
}

.hyxedwbpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.05 36.95v-25.9L24 31.4l12.95-20.35v25.9");
}
</style><path class="hyxedwbpu"/><path class="gx_dm4b2s"/>`,
		"fallback": "arcticons:moshup",
	});
}

export default Component;
