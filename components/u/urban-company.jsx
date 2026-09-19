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
		"content": `<style>.i6q9o78ed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.5 26.307v.058a4.64 4.64 0 0 1-4.642 4.642h0a4.64 4.64 0 0 1-4.641-4.642v-4.73a4.64 4.64 0 0 1 4.641-4.641h0a4.64 4.64 0 0 1 4.642 4.642v.057m-23-4.699v9.37a4.642 4.642 0 1 0 9.283 0v-9.37");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}
</style><path class="i9clfwm2k"/><path class="i6q9o78ed"/>`,
		"fallback": "arcticons:urban-company",
	});
}

export default Component;
