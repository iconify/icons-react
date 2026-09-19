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
		"content": `<style>.a5qou4b4x {
  fill: currentColor;
  d: path("m12 15l1.57-3.43L17 10l-3.43-1.57L12 5l-1.57 3.43L7 10l3.43 1.57z");
}

.lz9ejnhqg {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16z");
}

.nit-viblq {
  fill: currentColor;
  d: path("M4 17.17L5.17 16H20V4H4zm6.43-8.74L12 5l1.57 3.43L17 10l-3.43 1.57L12 15l-1.57-3.43L7 10z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="nit-viblq"/><path class="lz9ejnhqg"/><path class="a5qou4b4x"/>`,
		"fallback": "ic:twotone-try",
	});
}

export default Component;
