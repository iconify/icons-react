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
		"content": `<style>.no-63f0ce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 8.4a4 4 0 0 0-4 4v23.2a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4V12.4a4 4 0 0 0-4-4zM9 23.16l7.72 6L9 35.13v-12zm20.46 11.97h-11");
}
</style><path class="no-63f0ce"/>`,
		"fallback": "arcticons:shell-terminal",
	});
}

export default Component;
