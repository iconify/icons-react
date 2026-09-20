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
		"content": `<style>.dl62x3brm {
  fill: currentColor;
  d: path("M4 21v-2q0-.825.588-1.412T6 17h.5v-2H6q-.825 0-1.412-.587T4 13v-2q0-.825.588-1.412T6 9h.5V7H6q-.825 0-1.412-.587T4 5V3q0-.825.588-1.412T6 1h3q.825 0 1.413.588T11 3v2q0 .825-.587 1.413T9 7h-.5v2H9q.825 0 1.413.588T11 11h3q0-.825.588-1.412T16 9h3q.825 0 1.413.588T21 11v2q0 .825-.587 1.413T19 15h-3q-.825 0-1.412-.587T14 13h-3q0 .825-.587 1.413T9 15h-.5v2H9q.825 0 1.413.588T11 19v2q0 .825-.587 1.413T9 23H6q-.825 0-1.412-.587T4 21");
}
</style><path class="dl62x3brm"/>`,
		"fallback": "material-symbols:schema-rounded",
	});
}

export default Component;
