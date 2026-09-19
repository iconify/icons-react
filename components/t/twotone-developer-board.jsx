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
		"content": `<style>.b-pg3cvoe {
  fill: currentColor;
  d: path("M6 13h5v4H6zm0-6h5v5H6zm6 0h4v3h-4zm0 4h4v6h-4zm10-2V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9zm-4 10H4V5h14z");
}

.mefv-db9h {
  fill: currentColor;
  d: path("M4 19h14V5H4zm8-12h4v3h-4zm0 4h4v6h-4zM6 7h5v5H6zm0 6h5v4H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="mefv-db9h"/><path class="b-pg3cvoe"/>`,
		"fallback": "ic:twotone-developer-board",
	});
}

export default Component;
