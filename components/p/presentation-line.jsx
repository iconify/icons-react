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
		"content": `<style>.i2biyzbmj {
  d: path("M2.5 2.5h19V16h-19Zm5.5 19l2-5.5m6 5.5L14 16");
}

.rhi2ieb2n {
  d: path("M6.5 12.5L10 9l3 2l4.5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i2biyzbmj"/><path class="rhi2ieb2n"/></g>`,
		"fallback": "uix-sharp:presentation-line",
	});
}

export default Component;
