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
		"content": `<style>.qe30z3rue {
  fill: currentColor;
  d: path("M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zM7 4V3h10v1zm9 8l-4 4l-4-4l1.41-1.41L11 12.17V8h2v4.17l1.59-1.59z");
}
</style><path class="qe30z3rue"/>`,
		"fallback": "ic:outline-system-security-update",
	});
}

export default Component;
