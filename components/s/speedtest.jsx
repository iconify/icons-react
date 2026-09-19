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
		"content": `<style>.edgifbb2q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.29 2a22 22 0 0 1 15.27 37.57l-4.11-4.11a16.2 16.2 0 1 0-22.86-.05l-4.15 4.16A22 22 0 0 1 24.29 2m8.52 13.21L26.94 27h-5.88v-5.91Z");
}
</style><path class="edgifbb2q"/>`,
		"fallback": "arcticons:speedtest",
	});
}

export default Component;
