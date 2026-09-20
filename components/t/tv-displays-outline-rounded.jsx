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
		"content": `<style>.qfafp8bbu {
  fill: currentColor;
  d: path("M3 16q-.425 0-.712-.288T2 15V4q0-.825.588-1.412T4 2h13q.425 0 .713.288T18 3t-.288.713T17 4H4v11q0 .425-.288.713T3 16m9 6q-.425 0-.712-.288T11 21v-1H8q-.825 0-1.412-.587T6 18V8q0-.825.588-1.412T8 6h13q.825 0 1.413.588T23 8v10q0 .825-.587 1.413T21 20h-3v1q0 .425-.288.713T17 22zm-4-4h13V8H8zm6.5-5");
}
</style><path class="qfafp8bbu"/>`,
		"fallback": "material-symbols:tv-displays-outline-rounded",
	});
}

export default Component;
