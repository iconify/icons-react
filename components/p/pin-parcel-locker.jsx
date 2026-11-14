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
		"content": `<style>.c5bnamqfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3h17v18h-17ZM12 3v18M3.5 10H12m0 4h8.5M9 6.5h.01m5.99 11h.01");
}
</style><path class="c5bnamqfq"/>`,
		"fallback": "uix-sharp:pin-parcel-locker",
	});
}

export default Component;
