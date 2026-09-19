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
		"content": `<style>.eu0_r0bqr {
  fill: currentColor;
  d: path("M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9zM5 19V5h9v5h5v9zM9 8c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m0 4c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m0 4c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1");
}
</style><path class="eu0_r0bqr"/>`,
		"fallback": "ic:outline-summarize",
	});
}

export default Component;
