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
		"content": `<style>.c9s2g6b2r {
  fill: currentColor;
  d: path("M20 9.42V12h2V6h-6v2h2.58l-4.46 4.46a.996.996 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2 16.59L3.41 18l5.29-5.29a.996.996 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0z");
}
</style><path class="c9s2g6b2r"/>`,
		"fallback": "ic:outline-moving",
	});
}

export default Component;
