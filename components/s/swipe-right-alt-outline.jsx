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
		"content": `<style>.kzbqpcbrk {
  fill: currentColor;
  d: path("M9 17q-2.075 0-3.537-1.463T4 12t1.463-3.537T9 7q1.825 0 3.188 1.138T13.9 11h4.275L16.6 9.4L18 8l4 4l-4 4l-1.425-1.4l1.6-1.6H13.9q-.35 1.725-1.713 2.863T9 17m2.125-2.875Q12 13.25 12 12t-.875-2.125T9 9t-2.125.875T6 12t.875 2.125T9 15t2.125-.875M9 12");
}
</style><path class="kzbqpcbrk"/>`,
		"fallback": "material-symbols:swipe-right-alt-outline",
	});
}

export default Component;
