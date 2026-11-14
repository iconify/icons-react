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
		"content": `<style>.lqe4mvbtk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h4.5v17H3Zm7 10.9V3.5h4.5v4.7m-.6 12.3H10v-5.9m2.75-.1a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm6.5 2.75l2.25 2.25");
}
</style><path class="lqe4mvbtk"/>`,
		"fallback": "uix-sharp:library-search",
	});
}

export default Component;
