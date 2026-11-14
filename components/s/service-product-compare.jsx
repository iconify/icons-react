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
		"content": `<style>.ir1-6pcpj {
  d: path("m5.25 12l2 2l2.5-4m5 2h3.5");
}

.mcxhr7b1o {
  d: path("M3 3.5h18v17H3Zm9 0v17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mcxhr7b1o"/><path class="ir1-6pcpj"/></g>`,
		"fallback": "uix-sharp:service-product-compare",
	});
}

export default Component;
