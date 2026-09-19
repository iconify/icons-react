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
		"content": `<style>.rpxe9ibnu {
  cx: 12px;
  cy: 19px;
  r: 2px;
  fill: currentColor;
}

.xi7mcbcba {
  fill: currentColor;
  d: path("M10 3h4v12h-4z");
}
</style><circle class="rpxe9ibnu"/><path class="xi7mcbcba"/>`,
		"fallback": "ic:twotone-priority-high",
	});
}

export default Component;
