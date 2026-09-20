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

.u37fptb4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.853 24a3.85 3.85 0 1 1 0 7.7H9.5V16.3h6.353a3.85 3.85 0 1 1 0 7.7m0 0H9.5m19.429 5.757a3.85 3.85 0 0 1-7.195-1.907v-2.502a3.85 3.85 0 1 1 7.7 0v1.25h-7.7m9.73-10.298v13.475c0 1.063.862 1.925 1.925 1.925h.578m2.03-15.4v13.475c0 1.063.862 1.925 1.925 1.925h.578");
}
</style><path class="i9clfwm2k"/><path class="u37fptb4v"/>`,
		"fallback": "arcticons:mybell",
	});
}

export default Component;
