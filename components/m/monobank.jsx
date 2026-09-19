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

.urnyj9b9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 23.35a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.3m-4-5.3v5.3m4-3.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.3m5 0a2 2 0 0 1-2-2v-1.3a2 2 0 1 1 4 0v1.3a2 2 0 0 1-2 2m14 0a2 2 0 0 1-2-2v-1.3a2 2 0 1 1 4 0v1.3a2 2 0 0 1-2 2m-5 0v-3.3a2 2 0 1 0-4 0m0 3.3v-5.3");
}
</style><path class="i9clfwm2k"/><path class="urnyj9b9h"/>`,
		"fallback": "arcticons:monobank",
	});
}

export default Component;
