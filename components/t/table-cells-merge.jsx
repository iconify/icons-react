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
		"content": `<style>.ixzx_qbdt {
  d: path("M2.5 5h19v14h-19Zm3 7h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbkq21fej {
  d: path("m7.5 10l2 2l-2 2m11-2h-4m2-2l-2 2l2 2");
}
</style><g class="ulnmmdpxh"><path class="ixzx_qbdt"/><path class="vbkq21fej"/></g>`,
		"fallback": "uix-sharp:table-cells-merge",
	});
}

export default Component;
