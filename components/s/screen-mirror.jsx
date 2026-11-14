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
		"content": `<style>.k8876snol {
  d: path("m9.5 17.75l1.75 1.75l-1.75 1.75m5-10.25h7v10.5h-7Z");
}

.p-_sw8--k {
  d: path("M11.7 13H2.5V2.5H18v5.7M5.5 16A3.5 3.5 0 0 0 9 19.5h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p-_sw8--k"/><path class="k8876snol"/></g>`,
		"fallback": "uix-sharp:screen-mirror",
	});
}

export default Component;
