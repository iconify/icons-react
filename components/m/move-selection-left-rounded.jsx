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
		"content": `<style>.why1j0b8r {
  fill: currentColor;
  d: path("M4 18q-.825 0-1.412-.587T2 16V8q0-.825.588-1.412T4 6h8q.825 0 1.413.588T14 8v8q0 .825-.587 1.413T12 18zm12.288-.288Q16 17.426 16 17t.288-.712T17 16t.713.288T18 17t-.288.713T17 18t-.712-.288m4 0Q20 17.426 20 17t.288-.712T21 16t.713.288T22 17t-.288.713T21 18t-.712-.288m0-5Q20 12.425 20 12t.288-.712T21 11t.713.288T22 12t-.288.713T21 13t-.712-.288m0-5Q20 7.426 20 7t.288-.712T21 6t.713.288T22 7t-.288.713T21 8t-.712-.288m-4 0Q16 7.426 16 7t.288-.712T17 6t.713.288T18 7t-.288.713T17 8t-.712-.288");
}
</style><path class="why1j0b8r"/>`,
		"fallback": "material-symbols:move-selection-left-rounded",
	});
}

export default Component;
