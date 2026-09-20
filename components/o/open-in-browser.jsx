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
		"content": `<style>.b1p_4g8hk {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21h-4v-2h4V7H5v12h4v2zm6 0v-6.15l-1.6 1.6L8 15l4-4l4 4l-1.4 1.45l-1.6-1.6V21z");
}
</style><path class="b1p_4g8hk"/>`,
		"fallback": "material-symbols:open-in-browser",
	});
}

export default Component;
