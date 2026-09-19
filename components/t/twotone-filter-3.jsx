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
		"content": `<style>.ibenabczl {
  fill: currentColor;
  d: path("M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14zm-4-4v-1.5c0-.83-.67-1.5-1.5-1.5c.83 0 1.5-.67 1.5-1.5V7a2 2 0 0 0-2-2h-4v2h4v2h-2v2h2v2h-4v2h4a2 2 0 0 0 2-2m2 10v-2H3V5H1v16c0 1.1.9 2 2 2z");
}

.stgxf_bbr {
  fill: currentColor;
  d: path("M7 17h14V3H7zm4-4h4v-2h-2V9h2V7h-4V5h4a2 2 0 0 1 2 2v1.5c0 .83-.67 1.5-1.5 1.5c.83 0 1.5.67 1.5 1.5V13a2 2 0 0 1-2 2h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="stgxf_bbr"/><path class="ibenabczl"/>`,
		"fallback": "ic:twotone-filter-3",
	});
}

export default Component;
