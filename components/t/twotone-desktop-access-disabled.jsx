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
		"content": `<style>.a7zx9bcad {
  fill: currentColor;
  d: path("M2.99 6.09V16h9.91zM6.55 4l12 12H21V4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.zmdfmibkl {
  fill: currentColor;
  d: path("M1.41 1.69L0 3.1l1 .99V16c0 1.1.89 2 1.99 2H10v2H8v2h8v-2h-2v-2h.9l6 6l1.41-1.41zM2.99 16V6.09L12.9 16zM4.55 2l2 2H21v12h-2.45l2 2h.44c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z");
}
</style><path class="zmdfmibkl"/><path class="a7zx9bcad"/>`,
		"fallback": "ic:twotone-desktop-access-disabled",
	});
}

export default Component;
