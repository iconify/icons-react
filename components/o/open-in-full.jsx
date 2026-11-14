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
		"content": `<style>.zsdvirbgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6h12v12H6Zm8 4l7-7m-4.5 0H21v4.5M10 14l-7 7m0-4.5V21h4.5");
}
</style><path class="zsdvirbgw"/>`,
		"fallback": "uix-sharp:open-in-full",
	});
}

export default Component;
