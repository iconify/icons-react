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
		"content": `<style>.kr96wdbhk {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm2-3h7.375q.575 0 .863-.475t.037-.975l-4-8q-.125-.275-.375-.412T9.375 7H6q-.425 0-.712.288T5 8v8q0 .425.288.713T6 17m8-8h4q.425 0 .713-.288T19 8t-.288-.712T18 7h-4q-.425 0-.712.288T13 8t.288.713T14 9");
}
</style><path class="kr96wdbhk"/>`,
		"fallback": "material-symbols:payment-card-rounded",
	});
}

export default Component;
