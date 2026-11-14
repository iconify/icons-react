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
		"content": `<style>.lm03r2map {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5h13.1M4 19.5l4.217-7.38m2.878-5.036L12 5.5l3.461 6.056M7.5 19.5L10 14l2.5 5.5m-9-16l17 17");
}
</style><path class="lm03r2map"/>`,
		"fallback": "uix-sharp:no-camping",
	});
}

export default Component;
