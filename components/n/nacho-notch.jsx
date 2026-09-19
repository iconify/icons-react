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
		"content": `<style>.i8r_ij5_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 19v6a4 4 0 0 1-4 4h-31a4 4 0 0 1-4-4v-6");
}
</style><path class="i8r_ij5_g"/>`,
		"fallback": "arcticons:nacho-notch",
	});
}

export default Component;
