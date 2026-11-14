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
		"content": `<style>.yprt34zhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4h4.5v9h-4.5ZM10 4h4.5v9H10Zm7.25 0h4.5v9h-4.5ZM2.5 16h19M5 16v5m14.5-5v5");
}
</style><path class="yprt34zhq"/>`,
		"fallback": "uix-sharp:stadium-seats",
	});
}

export default Component;
