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
		"content": `<style>.izi0b8bfz {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19v-6.25h7V21zm7 0v-8.25h9V19q0 .825-.587 1.413T19 21zM3 10.75V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5.75z");
}
</style><path class="izi0b8bfz"/>`,
		"fallback": "material-symbols:team-dashboard-rounded",
	});
}

export default Component;
