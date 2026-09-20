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
		"content": `<style>.sb3ws_bwe {
  fill: currentColor;
  d: path("M6 21v-2h7v-7.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6V16H4q-.825 0-1.412-.587T2 14V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v9q0 .825-.587 1.413T20 16h-5v3h3v2z");
}
</style><path class="sb3ws_bwe"/>`,
		"fallback": "material-symbols:open-jam",
	});
}

export default Component;
