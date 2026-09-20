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
		"content": `<style>.pn2jucc7s {
  fill: currentColor;
  d: path("m14 19l5-5h-4q-.425 0-.712.288T14 15zm-9 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v9.175q0 .4-.15.763t-.425.637l-4.85 4.85q-.275.275-.637.425t-.763.15zm3-7h3q.425 0 .713-.288T12 13t-.288-.712T11 12H8q-.425 0-.712.288T7 13t.288.713T8 14m0-4h8q.425 0 .713-.288T17 9t-.288-.712T16 8H8q-.425 0-.712.288T7 9t.288.713T8 10");
}
</style><path class="pn2jucc7s"/>`,
		"fallback": "material-symbols:sticky-note-2-rounded",
	});
}

export default Component;
