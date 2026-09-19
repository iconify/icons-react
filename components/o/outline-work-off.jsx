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
		"content": `<style>.c-kp_gubj {
  fill: currentColor;
  d: path("M10 4h4v2h-3.6l2 2H20v7.6l2 2V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6zM3.4 1.84L1.99 3.25L4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l2 2l1.41-1.41zM4 19V8h2.74l11 11z");
}
</style><path class="c-kp_gubj"/>`,
		"fallback": "ic:outline-work-off",
	});
}

export default Component;
