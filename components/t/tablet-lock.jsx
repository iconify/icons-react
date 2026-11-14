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
		"content": `<style>.hrxs47bot {
  d: path("M9.5 11h5v4h-5Zm1 0V9.75a1.5 1.5 0 0 1 3 0V11");
}

.n0bp65b1i {
  d: path("M4 2.5h16v19H4Zm6.5 16h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n0bp65b1i"/><path class="hrxs47bot"/></g>`,
		"fallback": "uix-sharp:tablet-lock",
	});
}

export default Component;
