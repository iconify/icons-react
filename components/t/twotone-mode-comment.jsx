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
		"content": `<style>.gsz4t6bvt {
  fill: currentColor;
  d: path("M4 4v12h14.83L20 17.17V4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.pq8sdfdop {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m0 15.17L18.83 16H4V4h16z");
}
</style><path class="pq8sdfdop"/><path class="gsz4t6bvt"/>`,
		"fallback": "ic:twotone-mode-comment",
	});
}

export default Component;
