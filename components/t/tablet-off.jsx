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
		"content": `<style>.lq_yyubzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.4 2.5H20v13.6m-2.4 5.4H4V7.9m6.5 10.6h3m-10-15l17 17");
}
</style><path class="lq_yyubzt"/>`,
		"fallback": "uix-sharp:tablet-off",
	});
}

export default Component;
