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
		"content": `<style>.o-pkxkdoj {
  d: path("M2.5 13q2.25-1.5 4.25 0t4.5 0m0-3.5q2.25-1.5 4.25 0t4.5 0m0 4.5l-4.25 4h4.5L16 21.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y71_4_06l {
  d: path("M11.2 18.5H2.5V3H20v7.2M11.25 3v15.4");
}
</style><g class="ulnmmdpxh"><path class="y71_4_06l"/><path class="o-pkxkdoj"/></g>`,
		"fallback": "uix-sharp:osmotic-power",
	});
}

export default Component;
