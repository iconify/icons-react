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
		"content": `<style>.yjsxm-brt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5h11V19H10Zm0 7.5h11m-8.5 8v2.5m6-2.5v2.5M2.5 6A2.25 2.25 0 1 0 7 6a2.25 2.25 0 1 0-4.5 0Zm2.25 2.25V21.5");
}
</style><path class="yjsxm-brt"/>`,
		"fallback": "uix-sharp:pin-park-and-ride",
	});
}

export default Component;
