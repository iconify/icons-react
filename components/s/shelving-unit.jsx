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
		"content": `<style>.joj28bbcs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5v19m15-19v19M4.5 6h15m-15 6.5h15M4.5 19h15M8 8.75h5.5v3.75H8Z");
}
</style><path class="joj28bbcs"/>`,
		"fallback": "uix-sharp:shelving-unit",
	});
}

export default Component;
