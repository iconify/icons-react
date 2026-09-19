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
		"content": `<style>.crcyn-b7r {
  fill: currentColor;
  d: path("M13 13.9a5 5 0 1 0-2 0v4.27l-.88-.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59a.996.996 0 1 0-1.41-1.41l-.89.88z");
}
</style><path class="crcyn-b7r"/>`,
		"fallback": "ic:round-swipe-down-alt",
	});
}

export default Component;
