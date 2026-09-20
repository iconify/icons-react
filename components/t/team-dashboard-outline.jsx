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
		"content": `<style>.g0vgsjbhu {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm5-2v-6H5v6zm2 0h7v-6h-7zm-7-8h14V5H5z");
}
</style><path class="g0vgsjbhu"/>`,
		"fallback": "material-symbols:team-dashboard-outline",
	});
}

export default Component;
