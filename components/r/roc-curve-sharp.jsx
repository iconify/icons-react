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
		"content": `<style>.ezb6udbhb {
  d: path("M3.25 3.25v17.5h17.5M6.5 17.5l2-1.75m2-1.75l2-1.75m2-1.75L16 9.2");
}

.gtt0hx49y {
  d: path("M6.5 17.25C7 9.5 10.25 6.5 19.25 6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ezb6udbhb"/><path class="gtt0hx49y"/></g>`,
		"fallback": "iconoven:roc-curve-sharp",
	});
}

export default Component;
