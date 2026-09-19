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

.vrwul3bqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.21 18.158h6.816v6.816l-2.81 4.868H16.32l2.81-4.868h-2.92zm8.764 0h6.816v6.816l-2.811 4.868h-3.895l2.81-4.868h-2.92z");
}
</style><path class="vrwul3bqr"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:materialnotes",
	});
}

export default Component;
