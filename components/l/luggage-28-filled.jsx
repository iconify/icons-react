import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eu8ynmbpt {
  fill: currentColor;
  d: path("M9 2.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5H18v1h1.5A3.5 3.5 0 0 1 23 7.5V21a3.5 3.5 0 0 1-3 3.465v.785a.75.75 0 0 1-1.5 0v-.75h-9v.75a.75.75 0 0 1-1.5 0v-.785A3.5 3.5 0 0 1 5 21V7.5A3.5 3.5 0 0 1 8.5 4H10V3h-.25A.75.75 0 0 1 9 2.25m2.5.75v1h5V3zM9.75 9a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="eu8ynmbpt"/>`,
		"fallback": "fluent:luggage-28-filled",
	});
}

export default Component;
