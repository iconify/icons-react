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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.ut3_lsqlk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.159 5.5v37m0-32.613c3.7 0 2.243 28.926 9.925 28.926H42.5M18.159 9.887c-3.701 0-2.243 28.926-9.925 28.926H5.5");
}
</style><path class="ut3_lsqlk"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:tuner",
	});
}

export default Component;
