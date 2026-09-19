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
		"content": `<style>.u6-iyfblw {
  fill: currentColor;
  d: path("M3.09 4.44a.996.996 0 0 0 0 1.41l2.03 2.03l-.12.13V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.17 1.17a.996.996 0 1 0 1.41-1.41L4.5 4.44a.996.996 0 0 0-1.41 0M19 16.11V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06z");
}
</style><path class="u6-iyfblw"/>`,
		"fallback": "ic:round-no-sim",
	});
}

export default Component;
