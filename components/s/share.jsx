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
		"content": `<style>.yi6wtbbdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30 15l-12.1 6.07m0 5.86l12.18 6.11m12.42 2.89a6.55 6.55 0 1 1-13.1 0a6.55 6.55 0 0 1 13.1 0m-.1-23.86a6.55 6.55 0 1 1-13.1 0a6.55 6.55 0 0 1 13.1 0M18.6 24a6.55 6.55 0 1 1-13.1 0a6.55 6.55 0 0 1 13.1 0");
}
</style><path class="yi6wtbbdr"/>`,
		"fallback": "arcticons:share",
	});
}

export default Component;
