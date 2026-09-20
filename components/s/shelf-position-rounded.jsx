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
		"content": `<style>.r4iurovta {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19v-3h18v3q0 .825-.587 1.413T19 21zm11.5-7V3H19q.825 0 1.413.588T21 5v9zM3 14V5q0-.825.588-1.412T5 3h2.5v11zm6.5 0V3h5v11z");
}
</style><path class="r4iurovta"/>`,
		"fallback": "material-symbols:shelf-position-rounded",
	});
}

export default Component;
