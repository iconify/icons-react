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
		"content": `<style>.r3ht9fbrn {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm12-10q.525 0 1.038-.137T19 10.45V5h-5.45q-.275.45-.413.963T13 7q0 1.65 1.175 2.825T17 11");
}
</style><path class="r3ht9fbrn"/>`,
		"fallback": "material-symbols:ripples",
	});
}

export default Component;
