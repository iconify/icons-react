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
		"content": `<style>.w0navhbnm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.453 4.035q-.799-.481-1.704-.255T2.365 4.805t-.254 1.703l2.298 9.219q.083.331.204.599q-.635.161-1.131.656q-.732.732-.732 1.768q0 2.5 2.5 2.5h13.5q2.5 0 2.5-2.5t-2.5-2.5H8.722q.295-.645.054-1.612L6.478 5.42q-.225-.905-1.025-1.385");
}
</style><path class="w0navhbnm"/>`,
		"fallback": "uix-solid:laptop-open-side",
	});
}

export default Component;
