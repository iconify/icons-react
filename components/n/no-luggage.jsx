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
		"content": `<style>.qu6y_8x-d {
  fill: currentColor;
  d: path("m20.475 23.3l-2.525-2.525q-.2.125-.437.175T17 21q0 .425-.288.713T16 22t-.712-.288T15 21H9q0 .425-.288.713T8 22t-.712-.288T7 21q-.825 0-1.412-.587T5 19V7.825L.675 3.5L2.1 2.075l19.8 19.8zM9 18h2v-4.175l-2-2zm4 0h2v-.175l-2-2zm6-1.875l-4-4V9h-2v1.125l-4-4V4q0-.825.588-1.412T11 2h2q.825 0 1.413.588T15 4v2h2q.825 0 1.413.588T19 8zM11 6h2V4h-2z");
}
</style><path class="qu6y_8x-d"/>`,
		"fallback": "material-symbols:no-luggage",
	});
}

export default Component;
