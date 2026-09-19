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
		"content": `<style>.d0h_ybcxw {
  fill: currentColor;
  d: path("M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12H4V5h16zm-9-9h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zM5 9h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2zm-5 17l4-4H8z");
}

.j49-62b6i {
  fill: currentColor;
  d: path("M4 15h16V5H4zm13-9h2v2h-2zm0 3h2v2h-2zm-3-3h2v2h-2zm0 3h2v2h-2zm-3-3h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zm0 3h8v2H8zM5 6h2v2H5zm0 3h2v2H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="j49-62b6i"/><path class="d0h_ybcxw"/>`,
		"fallback": "ic:twotone-keyboard-hide",
	});
}

export default Component;
