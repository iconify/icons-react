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
		"content": `<style>.ml88e78xn {
  fill: currentColor;
  d: path("M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm4-7h-3V2h-2v2H8V2H6v2H3v18h18zm-2 16H5V9h14z");
}
</style><path class="ml88e78xn"/>`,
		"fallback": "ic:sharp-date-range",
	});
}

export default Component;
