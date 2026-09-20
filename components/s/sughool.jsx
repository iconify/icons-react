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
		"content": `<style>.oxg9c0ban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 30.5h-13v-13h-13v13h-13");
}

.pfndhyobm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.298 26.298L24 24v-3.25m11.389-2.264a5.5 5.5 0 0 1 0 7.778m-22.778 0a5.5 5.5 0 0 1 0-7.778m2.061 6.717a4 4 0 0 1 0-5.657m18.656.001a4 4 0 0 1 0 5.657");
}
</style><path class="oxg9c0ban"/><path class="pfndhyobm"/>`,
		"fallback": "arcticons:sughool",
	});
}

export default Component;
