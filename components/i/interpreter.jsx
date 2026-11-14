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
		"content": `<style>.nh0x5pmbm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 3l5.5 5.25L3 13.5m8 0h1.7m3.5 0H19m-3.5 2.75L21.25 19l-5.75 2.75Z");
}
</style><path class="nh0x5pmbm"/>`,
		"fallback": "uix-sharp:interpreter",
	});
}

export default Component;
