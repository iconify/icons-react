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

.w5j95sbgy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 6l6 6l-7 7a1.414 1.414 0 0 1-2 0l-4-4a1.414 1.414 0 0 1 0-2zM8 3l3 3m-6 6h12m4 7a2 2 0 1 1-4 0c0-1 1-2 2-3c1 1 2 2 2 3");
}

.yybl9yb1r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17 12l-7 7a1.415 1.415 0 0 1-2 0l-4-4a1.415 1.415 0 0 1 0-2l1-1Zm2 4c1 1 2 2 2 3a2 2 0 1 1-4 0c0-1 1-2 2-3");
}
</style><g class="ft5dv1b6b"><path class="yybl9yb1r"/><path class="w5j95sbgy"/></g>`,
		"fallback": "coolicons:paint-bucket-duotone",
	});
}

export default Component;
