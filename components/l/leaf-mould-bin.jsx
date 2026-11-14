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
		"content": `<style>.n0_5vu3lr {
  d: path("m5.5 7l1.25 13h10.5L18.5 7m-15 0h17m-11 0V4h5v3");
}

.ppy5h4bam {
  d: path("M9.5 17c0-3.5 2-6.5 5.25-6.5c0 3.5-2.25 6.5-5.25 6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n0_5vu3lr"/><path class="ppy5h4bam"/></g>`,
		"fallback": "uix-sharp:leaf-mould-bin",
	});
}

export default Component;
