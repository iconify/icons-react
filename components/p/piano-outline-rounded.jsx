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
		"content": `<style>.g3k4b8_tc {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h3.25v-4.5H8q-.425 0-.712-.288T7 13.5V5H5zm10.75 0H19V5h-2v8.5q0 .425-.288.713T16 14.5h-.25zm-6 0h4.5v-4.5H14q-.425 0-.712-.288T13 13.5V5h-2v8.5q0 .425-.288.713T10 14.5h-.25z");
}
</style><path class="g3k4b8_tc"/>`,
		"fallback": "material-symbols:piano-outline-rounded",
	});
}

export default Component;
