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
		"content": `<style>.oy_ijkpkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 13.75V5a2.5 2.5 0 0 1 5 0v8.75a4.25 4.25 0 1 1-5 0Zm2.5 3.5V7.5M2.5 12h4m11 0h4");
}
</style><path class="oy_ijkpkb"/>`,
		"fallback": "uix-sharp:temperature-anomaly",
	});
}

export default Component;
