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

.td10onbkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.145 37.489c-1.639 3.23-4.81 1.603-3.824-.727l4.754-10.283c.84-1.69.84-3.39 0-5.08l-4.562-9.867c-1.008-2.316 1.948-4.419 3.632-1.143l5.09 11.01c.84 1.69.84 3.39 0 5.08z");
}
</style><path class="td10onbkk"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:pc-inpact",
	});
}

export default Component;
