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
		"content": `<style>.qqckm6bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5V3m18 18.5V3M3 10.5h18m-18-4h11m2 4v11m0-7.5h5m-5 3.75h5");
}
</style><path class="qqckm6bat"/>`,
		"fallback": "uix-sharp:loft-bed",
	});
}

export default Component;
