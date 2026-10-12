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
		"content": `<style>.zzwtnsm3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11.75H7l.46.59l.83 1.07l.46.59h6.5l.46-.59l.83-1.07l.46-.59h4.25v9.5H2.75v-9.5zm-.75 5.75h18.5M5 9V2.75h14V9M9.5 6h5");
}
</style><path class="zzwtnsm3o"/>`,
		"fallback": "iconoven:letter-tray-sharp",
	});
}

export default Component;
