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

.y7gu_fbsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 19.022l1.117 3.438h3.615l-2.925 2.125l1.117 3.437L24 25.898l-2.924 2.124l1.117-3.437l-2.925-2.125h3.615z");
}
</style><path class="i9clfwm2k"/><path class="y7gu_fbsm"/>`,
		"fallback": "arcticons:puzzle-purple",
	});
}

export default Component;
