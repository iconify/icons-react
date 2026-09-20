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
		"content": `<style>.qtszi9rjl {
  fill: currentColor;
  d: path("M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3zm8.5 7.5L18 21l3-3l-3-3l1.5-1.5L24 18zM8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v7h-5v7h-2v2z");
}
</style><path class="qtszi9rjl"/>`,
		"fallback": "material-symbols:queue-play-next",
	});
}

export default Component;
