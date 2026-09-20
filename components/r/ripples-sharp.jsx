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
		"content": `<style>.rrjumob-o {
  fill: currentColor;
  d: path("M13.55 5q-.275.45-.413.963T13 7q0 1.65 1.175 2.825T17 11q.525 0 1.038-.137T19 10.45V5zM3 21V3h18v18z");
}
</style><path class="rrjumob-o"/>`,
		"fallback": "material-symbols:ripples-sharp",
	});
}

export default Component;
