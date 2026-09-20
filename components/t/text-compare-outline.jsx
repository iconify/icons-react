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
		"content": `<style>.q8gmxpb2w {
  fill: currentColor;
  d: path("M10 23v-2H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h5V1h2v22zm-5-4h5v-2H7v-2h3v-2H7v-2h3V9H7V7h3V5H5zm9-14V3h5q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21h-5v-2h5V5zm0 8v-2h3v2zm0-4V7h3v2zm-4 3");
}
</style><path class="q8gmxpb2w"/>`,
		"fallback": "material-symbols:text-compare-outline",
	});
}

export default Component;
