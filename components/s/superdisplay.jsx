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

.wj8ef3zgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.318 42.5c3.364-1.678 7.177-5.556 7.177-9.225c0-4.205-2.025-5.391-7.495-9.275s-7.495-5.07-7.495-9.275c0-3.669 3.813-7.547 7.177-9.225");
}
</style><path class="i9clfwm2k"/><path class="wj8ef3zgu"/>`,
		"fallback": "arcticons:superdisplay",
	});
}

export default Component;
