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
		"content": `<style>.sy6lcfbnp {
  fill: currentColor;
  d: path("M13 7h2v2h-2zM7 17h14V3H7zm4-4h4v-2h-2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.v_4yz60wi {
  fill: currentColor;
  d: path("M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14zM3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2m14-10V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-4v2h4a2 2 0 0 0 2-2m-4-4V7h2v2z");
}
</style><path class="sy6lcfbnp"/><path class="v_4yz60wi"/>`,
		"fallback": "ic:twotone-filter-9",
	});
}

export default Component;
