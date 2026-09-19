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
		"content": `<style>.e03892bbk {
  fill: currentColor;
  d: path("M6 9h8v2H6zm0-4h8v2H6zm10 4h2v2h-2zm0-4h2v2h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.qb95ih67d {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM6 5h8v2H6zm0 4h8v2H6zm12 10H6v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2zm0-8h-2V9h2zm0-4h-2V5h2z");
}
</style><path class="e03892bbk"/><path class="qb95ih67d"/>`,
		"fallback": "ic:twotone-blinds",
	});
}

export default Component;
