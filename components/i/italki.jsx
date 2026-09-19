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
		"content": `<style>.jdp6r-d-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 16.5v15a2 2 0 0 0 2 2h28l5 6v-6h2a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2");
}
</style><path class="jdp6r-d-e"/>`,
		"fallback": "arcticons:italki",
	});
}

export default Component;
