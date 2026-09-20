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
		"content": `<style>.wcb9_2bqt {
  fill: currentColor;
  d: path("M8 19v-3h6v-2.5H8V5h9v3h-6v2.5h4q.825 0 1.413.588T17 12.5V16q0 1.25-.875 2.125T14 19z");
}
</style><path class="wcb9_2bqt"/>`,
		"fallback": "material-symbols:timer-5-shutter",
	});
}

export default Component;
