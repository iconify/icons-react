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
		"content": `<style>.qyw3ltb3v {
  fill: currentColor;
  d: path("m9.5 18l7-4.5l-7-4.5zM4 21q-.825 0-1.412-.587T2 19V6h6V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h6v13q0 .825-.587 1.413T20 21zm6-15h4V4h-4z");
}
</style><path class="qyw3ltb3v"/>`,
		"fallback": "material-symbols:shop",
	});
}

export default Component;
