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
		"content": `<style>.do16zub0f {
  fill: currentColor;
  d: path("M7.5 6h.01");
}

.nm66_ccwr {
  d: path("M4.5 3h6v8.5h-6ZM4 11.5h16c0 3.5-2.5 5.5-6 6l1 3.5H8l.5-4c-3-1-4.5-3-4.5-5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nm66_ccwr"/><path class="do16zub0f"/></g>`,
		"fallback": "uix-sharp:pin-toilet",
	});
}

export default Component;
