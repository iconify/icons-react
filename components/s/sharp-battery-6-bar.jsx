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
		"content": `<style>.d2j0i8bgl {
  fill: currentColor;
  d: path("M17 4v18H7V4h3V2h4v2zm-2 2H9v2h6z");
}
</style><path class="d2j0i8bgl"/>`,
		"fallback": "ic:sharp-battery-6-bar",
	});
}

export default Component;
