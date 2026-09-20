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
		"content": `<style>.i8nzcjenu {
  fill: currentColor;
  d: path("M12 18q-.825 0-1.412-.587T10 16V8q0-.825.588-1.412T12 6h8q.825 0 1.413.588T22 8v8q0 .825-.587 1.413T20 18zM6.288 7.713Q6 7.425 6 7t.288-.712T7 6t.713.288T8 7t-.288.713T7 8t-.712-.288M3 8q-.425 0-.712-.288T2 7t.288-.712T3 6t.713.288T4 7t-.288.713T3 8m0 5q-.425 0-.712-.288T2 12t.288-.712T3 11t.713.288T4 12t-.288.713T3 13m0 5q-.425 0-.712-.288T2 17t.288-.712T3 16t.713.288T4 17t-.288.713T3 18m3.288-.288Q6 17.426 6 17t.288-.712T7 16t.713.288T8 17t-.288.713T7 18t-.712-.288");
}
</style><path class="i8nzcjenu"/>`,
		"fallback": "material-symbols:move-selection-right-rounded",
	});
}

export default Component;
