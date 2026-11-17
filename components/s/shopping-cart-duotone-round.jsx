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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.qkl5g7bmc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4c.846 0 1.662.816 2 2l2 7c.507 1.776 2.14 3 4 3h6c.796 0 1.602-.806 2-2l1-3c.492-1.476-.524-3-2-3H6m2 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m9 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.z6g2-5bcl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5.571 8H18c1.476 0 2.492 1.524 2 3l-1 3c-.398 1.194-1.204 2-2 2h-6a4.15 4.15 0 0 1-4-3Z");
}
</style><g class="ft5dv1b6b"><path class="z6g2-5bcl"/><path class="qkl5g7bmc"/></g>`,
		"fallback": "coolicons:shopping-cart-duotone-round",
	});
}

export default Component;
