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
		"content": `<style>.cky-wz0_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 2.75h6.5v18.5h-6.5zm0 3.75h2.5M3.25 10h3.5m-3.5 3.5h2.5M3.25 17h3.5m7.5-.5V2.75h5.5V16.5L17 21.25Zm0-9.75h5.5");
}
</style><path class="cky-wz0_u"/>`,
		"fallback": "iconoven:pencil-ruler-sharp",
	});
}

export default Component;
