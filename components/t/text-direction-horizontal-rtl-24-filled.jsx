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
		"content": `<style>.ilvo9_f3i {
  fill: currentColor;
  d: path("M16.25 3a1 1 0 0 0-.923.615l-3.75 9a1 1 0 1 0 1.846.77L14.416 11h3.667l.994 2.385a1 1 0 0 0 1.846-.77l-3.75-9A1 1 0 0 0 16.25 3m0 3.6l1 2.4h-2zM6.707 5.293a1 1 0 0 0-1.414 0L3.366 7.227a1 1 0 0 0-.366.77v.006c0 .31.143.588.366.77l1.927 1.934a1 1 0 0 0 1.414-1.414L6.414 9H11a1 1 0 0 0 0-2H6.414l.293-.293a1 1 0 0 0 0-1.414m-1.414 9a1 1 0 0 1 1.414 1.414L6.414 16H20a1 1 0 0 1 0 2H6.414l.293.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414z");
}
</style><path class="ilvo9_f3i"/>`,
		"fallback": "fluent:text-direction-horizontal-rtl-24-filled",
	});
}

export default Component;
