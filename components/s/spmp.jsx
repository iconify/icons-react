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

.q-uz3817q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.003 16.895V9l3.998 7.995L27.998 9v7.995M14.807 27.847c.48.608 1.225.943 1.998.9h1.2a1.999 1.999 0 0 0 0-3.997h-1.3a1.999 1.999 0 0 1 0-3.997h1.2a2.15 2.15 0 0 1 1.998.898m8.095 7.096v-7.995h2.598a2.698 2.698 0 0 1 0 5.397h-2.598M21.352 39v-7.995h2.649a2.698 2.698 0 1 1 0 5.397h-2.599");
}
</style><path class="q-uz3817q"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:spmp",
	});
}

export default Component;
