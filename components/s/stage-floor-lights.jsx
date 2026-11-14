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
		"content": `<style>.ywxdejbnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19v4.5h-19Zm2 0a1.5 1.5 0 0 1 3 0m3 0a1.5 1.5 0 0 1 3 0m3 0a1.5 1.5 0 0 1 3 0M5 12.75L3 3.5m9 9.25V3.5m7 9.25l2-9.25");
}
</style><path class="ywxdejbnb"/>`,
		"fallback": "uix-sharp:stage-floor-lights",
	});
}

export default Component;
