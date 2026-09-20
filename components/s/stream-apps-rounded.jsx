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
		"content": `<style>.n8sqbbbyh {
  fill: currentColor;
  d: path("m16 15l-1.15 1.15q-.25.25-.55.125T14 15.8V9q0-.425.288-.712T15 8h7q.425 0 .713.288T23 9v5q0 .425-.288.713T22 15zm-9 8q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v3q0 .425-.288.713T18 7t-.712-.288T17 6H7v12h10q0-.425.288-.712T18 17t.713.288T19 18v3q0 .825-.587 1.413T17 23z");
}
</style><path class="n8sqbbbyh"/>`,
		"fallback": "material-symbols:stream-apps-rounded",
	});
}

export default Component;
