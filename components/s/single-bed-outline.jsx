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
		"content": `<style>.l47qap-ki {
  fill: currentColor;
  d: path("M7 19H6l-.65-2H4v-5.025q0-.825.588-1.4T6 10V7q0-.825.588-1.412T8 5h8q.825 0 1.413.588T18 7v3q.825 0 1.413.588T20 12v5h-1.35L18 19h-1l-.65-2h-8.7zm6-9h3V7h-3zm-5 0h3V7H8zm-2 5h12v-3H6zm12 0H6z");
}
</style><path class="l47qap-ki"/>`,
		"fallback": "material-symbols:single-bed-outline",
	});
}

export default Component;
