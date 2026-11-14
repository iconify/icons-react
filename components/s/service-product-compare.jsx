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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ir1-6pcpj {
  d: path("m5.25 12l2 2l2.5-4m5 2h3.5");
}

.n532jmboy {
  d: path("M7.375 3.5h9.25A4.375 4.375 0 0 1 21 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 16.125v-8.25A4.375 4.375 0 0 1 7.375 3.5M12 3.5v17");
}
</style><g class="hntgybcog"><path class="n532jmboy"/><path class="ir1-6pcpj"/></g>`,
		"fallback": "uix:service-product-compare",
	});
}

export default Component;
