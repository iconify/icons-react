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
		"content": `<style>.y0pasxblj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h18.5v12.5H2.75zm5.5-3.5L12 6.25l3.75-3.5m-7.5 18.5h7.5");
}
</style><path class="y0pasxblj"/>`,
		"fallback": "iconoven:tv-input-sharp",
	});
}

export default Component;
