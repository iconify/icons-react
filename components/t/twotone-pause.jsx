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
		"content": `<style>.rf0fdac8k {
  fill: currentColor;
  d: path("M6 5h4v14H6zm8 0h4v14h-4z");
}
</style><path class="rf0fdac8k"/>`,
		"fallback": "ic:twotone-pause",
	});
}

export default Component;
