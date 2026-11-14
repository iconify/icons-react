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
		"content": `<style>.yvbdx2byb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 17a6 6 0 0 1 12 0M3.5 17h17v4h-17ZM12 3v3.5m-6.75-.75l2 2m11.5-2l-2 2M2.5 12h2.25m14.5 0h2.25");
}
</style><path class="yvbdx2byb"/>`,
		"fallback": "uix-sharp:security-alarm-bank",
	});
}

export default Component;
