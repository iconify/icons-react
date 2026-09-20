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
		"content": `<style>.uau_7bb8q {
  fill: currentColor;
  d: path("M10 23v-2H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h5V1h2v22zm4-18V3h5q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21h-5v-2h5V5zm0 8v-2h3v2zm0-4V7h3v2zm-7 8h3v-2H7zm0-4h3v-2H7zm0-4h3V7H7z");
}
</style><path class="uau_7bb8q"/>`,
		"fallback": "material-symbols:text-compare",
	});
}

export default Component;
