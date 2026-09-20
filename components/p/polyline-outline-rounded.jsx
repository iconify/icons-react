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
		"content": `<style>.wlrjzmm6l {
  fill: currentColor;
  d: path("M12 6h2V4h-2zm-7 8h2v-2H5zm12 6h2v-2h-2zm-2 0v-.5L8 16H5q-.825 0-1.412-.587T3 14v-2q0-.825.588-1.412T5 10h2.3L10 6.9V4q0-.825.588-1.412T12 2h2q.825 0 1.413.588T16 4v2q0 .825-.587 1.413T14 8h-2.3L9 11.1v3.15l6.125 3.05q.2-.575.713-.937T17 16h2q.825 0 1.413.588T21 18v2q0 .825-.587 1.413T19 22h-2q-.825 0-1.412-.587T15 20");
}
</style><path class="wlrjzmm6l"/>`,
		"fallback": "material-symbols:polyline-outline-rounded",
	});
}

export default Component;
