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

.tkjrh_1or {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.951 24.075c0 3.025-2.678 5.5-5.951 5.5s-5.951-2.475-5.951-5.5V20.5c0-3.025 2.678-5.5 5.951-5.5s5.951 2.475 5.951 5.5m0-5.5v22");
}
</style><path class="i9clfwm2k"/><path class="b tkjrh_1or"/>`,
		"fallback": "arcticons:qudelix",
	});
}

export default Component;
