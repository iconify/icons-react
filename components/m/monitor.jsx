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
		"content": `<style>.utn7x_xta {
  fill: currentColor;
  d: path("M6 21v-2l1-1H4q-.825 0-1.412-.587T2 16V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.587 1.413T20 18h-3l1 1v2z");
}
</style><path class="utn7x_xta"/>`,
		"fallback": "material-symbols:monitor",
	});
}

export default Component;
