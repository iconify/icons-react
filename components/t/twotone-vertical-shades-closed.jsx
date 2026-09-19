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
		"content": `<style>.e5oufi-gp {
  fill: currentColor;
  d: path("M9.5 5H11v14H9.5zM6 5h1.5v14H6zm7 0h1.5v14H13zm3.5 0H18v14h-1.5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.qcaetsbod {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM7.5 19H6V5h1.5zm3.5 0H9.5V5H11zm3.5 0H13V5h1.5zm3.5 0h-1.5V5H18z");
}
</style><path class="e5oufi-gp"/><path class="qcaetsbod"/>`,
		"fallback": "ic:twotone-vertical-shades-closed",
	});
}

export default Component;
