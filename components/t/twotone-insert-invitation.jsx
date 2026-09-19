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
		"content": `<style>.nggp9ebwd {
  fill: currentColor;
  d: path("M19 5H5v2h14z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.qqfgl5hkb {
  fill: currentColor;
  d: path("M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2M5 7V5h14v2zm0 2h14v10H5zm7 3h5v5h-5z");
}
</style><path class="nggp9ebwd"/><path class="qqfgl5hkb"/>`,
		"fallback": "ic:twotone-insert-invitation",
	});
}

export default Component;
