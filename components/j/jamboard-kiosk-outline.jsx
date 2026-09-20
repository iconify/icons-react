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
		"content": `<style>.j8ukkgjkl {
  fill: currentColor;
  d: path("M6 21v-2h5v-3H4q-.825 0-1.412-.587T2 14V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v9q0 .825-.587 1.413T20 16h-7v3h5v2zm-2-7h16V5H4zm0 0V5z");
}
</style><path class="j8ukkgjkl"/>`,
		"fallback": "material-symbols:jamboard-kiosk-outline",
	});
}

export default Component;
