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
		"content": `<style>.yxvw_yb0d {
  fill: currentColor;
  d: path("M14 7h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zM4 17h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m1.25-4.25l1.25 1.51L8.25 12l2.25 3h-7z");
}
</style><path class="yxvw_yb0d"/>`,
		"fallback": "ic:twotone-art-track",
	});
}

export default Component;
