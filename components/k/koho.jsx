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

.znphbfb8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.1 20v8m4.3 0l-3.3-4l3.3-4m-3.3 4h-1m7.5 1.4c0 1.5 1.2 2.7 2.6 2.7c1.5 0 2.7-1.2 2.7-2.7v-2.7c0-1.5-1.2-2.7-2.7-2.7s-2.6 1.2-2.6 2.7zm17 0c0 1.5 1.2 2.7 2.6 2.7c1.5 0 2.7-1.2 2.7-2.7v-2.7c0-1.5-1.2-2.7-2.7-2.7s-2.6 1.2-2.6 2.7zM25.1 20v8m5.3-8v8m-5.3-4h5.3M19.25 5.636V42.39");
}
</style><path class="i9clfwm2k"/><path class="znphbfb8e"/>`,
		"fallback": "arcticons:koho",
	});
}

export default Component;
