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
		"content": `<style>.eextsptkd {
  d: path("m3 7l9 4.5L21 7m-9 4.5v4.8m0 3.4v1.8M7.5 4.75l9 4.5M14.25 18l2.5-2.75h5v5.5h-5ZM17 18h.01");
}

.ob4y0-yxf {
  d: path("M13.095 20.952L12 21.5L3 17V7l9-4.5L21 7v5.438");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ob4y0-yxf"/><path class="eextsptkd"/></g>`,
		"fallback": "uix-sharp:label-applicator",
	});
}

export default Component;
