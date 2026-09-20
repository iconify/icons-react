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
		"content": `<style>.x93t8gr7h {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm14-5H5v3h14zm-2.5-2H19V5h-2.5zM5 14h2.5V5H5zm4.5 0h5V5h-5z");
}
</style><path class="x93t8gr7h"/>`,
		"fallback": "material-symbols:shelf-position-outline-rounded",
	});
}

export default Component;
