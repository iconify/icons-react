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
		"content": `<style>.dldnhmbjp {
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12");
}

.e-nnldbkq {
  d: path("M12 7.25V12l-3 2m5.25 3.75l1.625-2.031L17.5 17.75l1.625 2.031l1.625-2.031");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dldnhmbjp"/><path class="e-nnldbkq"/></g>`,
		"fallback": "iconoven:time-estimate-sharp",
	});
}

export default Component;
