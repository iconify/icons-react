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
		"content": `<style>.ji2clcbor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 13a11 11 0 1 1-11 11a11 11 0 0 1 11-11m0-9.5v6.11m14.5-.11l-4.32 4.32M44.5 24h-6.11m.11 14.5l-4.32-4.32M24 44.5v-6.11m-14.5.11l4.32-4.32M3.5 24h6.11M9.5 9.5l4.32 4.32");
}
</style><path class="ji2clcbor"/>`,
		"fallback": "arcticons:weather-alt",
	});
}

export default Component;
