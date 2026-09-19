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
		"content": `<style>.hzpqnlmob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4");
}

.xstbbxbsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.594 20l-2.65 8l-2.65-8m7.296 0v5.35a2.65 2.65 0 1 0 5.3 0V20m9.516 0v5.35a2.65 2.65 0 1 0 5.3 0V20M24.96 28v-8h1.8a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5z");
}
</style><path class="xstbbxbsd"/><path class="hzpqnlmob"/>`,
		"fallback": "arcticons:vudu",
	});
}

export default Component;
