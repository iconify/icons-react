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
		"content": `<style>.gucylbbzs {
  d: path("m5 12.5l5.75-7.25h2.5L19 12.5Zm5.75-7.25V2.5H13L15 4m-8 8.5v9h10v-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkdgtnbat {
  d: path("M10.75 21.5V18h2.5v3.5");
}
</style><g class="ulnmmdpxh"><path class="gucylbbzs"/><path class="vkdgtnbat"/></g>`,
		"fallback": "uix-sharp:oast-house",
	});
}

export default Component;
