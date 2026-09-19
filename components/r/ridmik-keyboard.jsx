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
		"content": `<style>.h0b4vz7bl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.008 42.5a4.582 4.582 0 1 1 8.777 0m7.875 0C2.532 21.213 33.917 11.597 42.5 9.834M38.085 42.5L42.5 17.397");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="h0b4vz7bl"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:ridmik-keyboard",
	});
}

export default Component;
