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
		"content": `<style>.b_08bu7ae {
  fill: currentColor;
  d: path("M4 5h16v11H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.j9g6h7dml {
  fill: currentColor;
  d: path("M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 13H4V5h16z");
}
</style><path class="j9g6h7dml"/><path class="b_08bu7ae"/>`,
		"fallback": "ic:twotone-monitor",
	});
}

export default Component;
