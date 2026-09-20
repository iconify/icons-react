import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bz6235big {
  fill: currentColor;
  d: path("M8 19v-5.5q0-1.25.875-2.125T11 10.5h3V8H8V5h6q1.25 0 2.125.875T17 8v2.5q0 1.25-.875 2.125T14 13.5h-3V16h6v3z");
}
</style><path class="bz6235big"/>`,
		"fallback": "material-symbols:timer-2-outline",
	});
}

export default Component;
