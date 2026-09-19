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
		"content": `<style>.yg_ly7b_x {
  fill: currentColor;
  d: path("m9.31 17l2.44-2.44L14.19 17l1.06-1.06l-2.44-2.44l2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06l2.44 2.44l-2.44 2.44zM21 3h-3V1h-2v2H8V1H6v2H3.01L3 21h18zm-2 16H5V8h14z");
}
</style><path class="yg_ly7b_x"/>`,
		"fallback": "ic:sharp-event-busy",
	});
}

export default Component;
