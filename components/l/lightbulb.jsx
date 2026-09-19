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
		"content": `<style>.c-uu6r59b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.011 36.642v-7.059l1.649-3.498m-5.671 10.557v-7.059l-1.649-3.498");
}

.l2qv45_-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.213 17.73a13.213 13.213 0 1 0-20.707 10.866a4 4 0 0 1 1.665 3.315v4.731h11.658v-4.735a4.05 4.05 0 0 1 1.703-3.337a13.17 13.17 0 0 0 5.681-10.84M19.444 38.928h9.112m-9.178 2.286h9.113m-6.97 2.286h4.958");
}
</style><path class="l2qv45_-o"/><path class="c-uu6r59b"/>`,
		"fallback": "arcticons:lightbulb",
	});
}

export default Component;
