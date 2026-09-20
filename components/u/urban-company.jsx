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

.uraqvbcho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.5 26.307v.058a4.642 4.642 0 1 1-9.283 0v-4.73a4.642 4.642 0 1 1 9.283 0v.058m-23-4.699v9.37a4.642 4.642 0 1 0 9.283 0v-9.37");
}
</style><path class="i9clfwm2k"/><path class="uraqvbcho"/>`,
		"fallback": "arcticons:urban-company",
	});
}

export default Component;
