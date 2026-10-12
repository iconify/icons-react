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
		"content": `<style>.fgny6ebra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.75h11m-5.5 0V5c5.5 0 5.5 2.5 0 2.5S6.5 10 12 10s5.5 2.5 0 2.5S6.5 15 12 15v1.5m-4.25 0h8.5v4.75h-8.5z");
}
</style><path class="fgny6ebra"/>`,
		"fallback": "iconoven:spring-coil-sharp",
	});
}

export default Component;
