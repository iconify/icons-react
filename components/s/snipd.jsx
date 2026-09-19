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
		"content": `<style>.lqjrtpm_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.9 33.1c-6.6-6.6-6.6-17.2 0-23.7s17.2-6.6 23.7 0zM33.1 15c6.6 6.6 6.6 17.2 0 23.7s-17.2 6.6-23.7 0z");
}
</style><path class="lqjrtpm_b"/>`,
		"fallback": "arcticons:snipd",
	});
}

export default Component;
