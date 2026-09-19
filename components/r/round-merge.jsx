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
		"content": `<style>.xgr66vf7x {
  fill: currentColor;
  d: path("M8.71 7.71a.996.996 0 0 1 0-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L15.3 6.3a.996.996 0 1 1-1.41 1.41L13 6.83v5.1c0 1.06.42 2.08 1.17 2.83l4.12 4.12a.996.996 0 1 1-1.41 1.41L12 15.41l-4.88 4.88a.996.996 0 1 1-1.41-1.41l4.12-4.12c.75-.75 1.17-1.77 1.17-2.83v-5.1l-.88.88a.996.996 0 0 1-1.41 0");
}
</style><path class="xgr66vf7x"/>`,
		"fallback": "ic:round-merge",
	});
}

export default Component;
