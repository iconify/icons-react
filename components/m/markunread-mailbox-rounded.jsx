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
		"content": `<style>.lvawp2b_s {
  fill: currentColor;
  d: path("M4 22q-.825 0-1.412-.587T2 20V10q0-.825.588-1.412T4 8h2V3q0-.425.288-.712T7 2h6q.425 0 .713.288T14 3v2q0 .425-.288.713T13 6H8v7q0 .425.288.713T9 14t.713-.288T10 13V8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z");
}
</style><path class="lvawp2b_s"/>`,
		"fallback": "material-symbols:markunread-mailbox-rounded",
	});
}

export default Component;
