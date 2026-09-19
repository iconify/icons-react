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
		"content": `<style>.a77me9b0r {
  fill: currentColor;
  d: path("M9 16.77V20l4-4l-4-4v2.73c-3.15-.56-5-1.9-5-2.73c0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58c0-2.76-4.48-5-10-5S2 9.24 2 12c0 2.24 2.94 4.13 7 4.77");
}
</style><path class="a77me9b0r"/>`,
		"fallback": "ic:twotone-360",
	});
}

export default Component;
