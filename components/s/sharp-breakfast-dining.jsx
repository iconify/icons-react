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
		"content": `<style>.k0_7oxbog {
  fill: currentColor;
  d: path("M17.85 3H6.14C4.15 3 2.36 4.39 2.05 6.36c-.27 1.75.59 3.29 1.95 4.09V21h16V10.45a4 4 0 0 0 1.95-4.11C21.63 4.38 19.83 3 17.85 3m-1.44 10L12 17.42L7.59 13L12 8.59z");
}
</style><path class="k0_7oxbog"/>`,
		"fallback": "ic:sharp-breakfast-dining",
	});
}

export default Component;
