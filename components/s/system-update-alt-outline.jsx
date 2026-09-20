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
		"content": `<style>.fg9mdyboh {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5v2H4v12h16V6h-5V4h5q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-4.6l-5-5L8.4 9l2.6 2.6V4h2v7.6L15.6 9l1.4 1.4z");
}
</style><path class="fg9mdyboh"/>`,
		"fallback": "material-symbols:system-update-alt-outline",
	});
}

export default Component;
