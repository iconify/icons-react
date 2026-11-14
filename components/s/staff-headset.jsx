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
		"content": `<style>.i-mir-b1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12v-.5a7 7 0 0 1 14 0v.5M3 12h5v6.5H3Zm13 0h5v6.5h-5Zm2.5 6.5v.5a2.5 2.5 0 0 1-2.5 2.5h-3.5");
}
</style><path class="i-mir-b1j"/>`,
		"fallback": "uix-sharp:staff-headset",
	});
}

export default Component;
