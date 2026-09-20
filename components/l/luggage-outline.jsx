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
		"content": `<style>.q3uovel7b {
  fill: currentColor;
  d: path("M7 21q-.825 0-1.412-.587T5 19V8q0-.825.588-1.412T7 6h2V4q0-.825.588-1.412T11 2h2q.825 0 1.413.588T15 4v2h2q.825 0 1.413.588T19 8v11q0 .825-.587 1.413T17 21q0 .425-.288.713T16 22t-.712-.288T15 21H9q0 .425-.288.713T8 22t-.712-.288T7 21m0-2h10V8H7zm2-1h2V9H9zm4 0h2V9h-2zM11 6h2V4h-2zm1 7.5");
}
</style><path class="q3uovel7b"/>`,
		"fallback": "material-symbols:luggage-outline",
	});
}

export default Component;
