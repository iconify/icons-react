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
		"content": `<style>.kfi4qnq1m {
  fill: currentColor;
  d: path("M8 19v-3h6v-2.5H8V5h9v3h-6v2.5h3q1.25 0 2.125.875T17 13.5V16q0 1.25-.875 2.125T14 19z");
}
</style><path class="kfi4qnq1m"/>`,
		"fallback": "material-symbols:timer-5-shutter-outline",
	});
}

export default Component;
