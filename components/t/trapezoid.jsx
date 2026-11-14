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
		"content": `<style>.fyu2z3bfn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.914 4.25h6.172q2.461-.001 3.214 2.343l2.812 8.75q.525 1.633-.486 3.02t-2.727 1.387H6.101q-1.716 0-2.727-1.387t-.486-3.02L5.7 6.593q.753-2.344 3.214-2.343");
}
</style><path class="fyu2z3bfn"/>`,
		"fallback": "uix-solid:trapezoid",
	});
}

export default Component;
