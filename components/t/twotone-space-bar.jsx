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
		"content": `<style>.mb_bxsbbi {
  fill: currentColor;
  d: path("M18 13H6V9H4v6h16V9h-2z");
}
</style><path class="mb_bxsbbi"/>`,
		"fallback": "ic:twotone-space-bar",
	});
}

export default Component;
