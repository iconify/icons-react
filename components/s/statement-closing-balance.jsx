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
		"content": `<style>.imi1lwbqa {
  d: path("M4.5 2.5h15v19h-15Zm3.5 4h8M8 10h8");
}

.nqchmx61f {
  d: path("M7 13.5h10V18H7Zm2.25 2.25h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="imi1lwbqa"/><path class="nqchmx61f"/></g>`,
		"fallback": "uix-sharp:statement-closing-balance",
	});
}

export default Component;
