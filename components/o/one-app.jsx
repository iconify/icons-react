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
		"content": `<style>.y09skub7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.727 43.5L20.758 37l8.97-6.5l-8.97-6.5l8.97-6.5l-8.97-6.5l8.97-6.5zM20.758 37V11m0 0l-8.485 6.15h8.485");
}
</style><path class="y09skub7p"/>`,
		"fallback": "arcticons:one-app",
	});
}

export default Component;
