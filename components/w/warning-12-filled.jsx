import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vwoy8qboj {
  fill: currentColor;
  d: path("M4.283 1.973c.777-1.297 2.655-1.297 3.432 0l2.997 5.005c.797 1.332-.163 3.027-1.716 3.027H3.003c-1.554 0-2.514-1.694-1.716-3.027zM6 6.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M6 3.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5");
}
</style><path class="vwoy8qboj"/>`,
		"fallback": "fluent:warning-12-filled",
	});
}

export default Component;
