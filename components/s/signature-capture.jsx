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
		"content": `<style>.frlhlji3z {
  d: path("M7 14q1.5-4 3 0q1.5 3 3-1h4M7 17h10");
}

.hz51vnb5y {
  d: path("M3.5 4.5h17v15h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hz51vnb5y"/><path class="frlhlji3z"/></g>`,
		"fallback": "uix-sharp:signature-capture",
	});
}

export default Component;
