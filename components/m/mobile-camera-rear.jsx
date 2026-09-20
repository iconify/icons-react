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
		"content": `<style>.qtr6-xt3y {
  fill: currentColor;
  d: path("m9.85 22.5l-1.4-1.4l1.1-1.1H5v-2h4.55l-1.1-1.1l1.4-1.4l3.5 3.5zM14 20v-2h5v2zM12.713 6.712Q13 6.425 13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7t.713-.288M5 17V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v3.1q.45.175.725.55T20 8.5v2q0 .475-.275.85T19 11.9V17h-6.225L9.85 14.075L6.9 17z");
}
</style><path class="qtr6-xt3y"/>`,
		"fallback": "material-symbols:mobile-camera-rear",
	});
}

export default Component;
