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

.j-xf97bfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 30.985V17l7 7l7-6.979V31M17 17L6.672 6.672M42.5 17.955L30.045 5.5M31 31l10.328 10.328M17.955 42.5L5.5 30.045");
}
</style><path class="i9clfwm2k"/><path class="j-xf97bfm"/>`,
		"fallback": "arcticons:mobile-legends-bang-bang",
	});
}

export default Component;
