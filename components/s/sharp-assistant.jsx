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
		"content": `<style>.dsz1prsax {
  fill: currentColor;
  d: path("M21 2H3v18h6l3 3l3-3h6zm-7.12 10.88L12 17l-1.88-4.12L6 11l4.12-1.88L12 5l1.88 4.12L18 11z");
}
</style><path class="dsz1prsax"/>`,
		"fallback": "ic:sharp-assistant",
	});
}

export default Component;
