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
		"content": `<style>.ygzzbym4z {
  fill: currentColor;
  d: path("M14 13q-1.25 0-2.125-.875T11 10t.875-2.125T14 7t2.125.875T17 10t-.875 2.125T14 13m-7 3q-.825 0-1.412-.587T5 14V6q0-.825.588-1.412T7 4h14q.825 0 1.413.588T23 6v8q0 .825-.587 1.413T21 16zm2-2h10q0-.825.588-1.412T21 12V8q-.825 0-1.412-.587T19 6H9q0 .825-.587 1.413T7 8v4q.825 0 1.413.588T9 14m10 6H3q-.825 0-1.412-.587T1 18V8q0-.425.288-.712T2 7t.713.288T3 8v10h16q.425 0 .713.288T20 19t-.288.713T19 20M7 14V6z");
}
</style><path class="ygzzbym4z"/>`,
		"fallback": "material-symbols:payments-outline-rounded",
	});
}

export default Component;
