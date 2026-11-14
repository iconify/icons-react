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
		"content": `<style>.rjekdxsyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v17h17M9 12h.01M13 16.5h.01m3.99-5h.01m-7.01 6h.01M6 17.5L19 7");
}
</style><path class="rjekdxsyp"/>`,
		"fallback": "uix-sharp:regression-line",
	});
}

export default Component;
