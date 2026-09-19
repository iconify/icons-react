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
		"content": `<style>.kgs1hseir {
  fill: currentColor;
  d: path("M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V9h14zM5 7V5h14v2zm5.56 10.46l5.93-5.93l-1.06-1.06l-4.87 4.87l-2.11-2.11l-1.06 1.06z");
}
</style><path class="kgs1hseir"/>`,
		"fallback": "ic:outline-event-available",
	});
}

export default Component;
