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
		"content": `<style>.tzxmcynbj {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19v-6h2v6h6v2zm8 0v-2h6v-6h2v6q0 .825-.587 1.413T19 21zm-7-4l3-4l2.25 3l3-4L18 17zm-3-6V5q0-.825.588-1.412T5 3h6v2H5v6zm16 0V5h-6V3h6q.825 0 1.413.588T21 5v6zm-4.575-1.425Q14 9.15 14 8.5t.425-1.075T15.5 7t1.075.425T17 8.5t-.425 1.075T15.5 10t-1.075-.425");
}
</style><path class="tzxmcynbj"/>`,
		"fallback": "material-symbols:wallpaper-outline",
	});
}

export default Component;
