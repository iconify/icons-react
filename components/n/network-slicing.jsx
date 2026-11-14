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
		"content": `<style>.zp0380b3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4H21l-1.5 3.5H3Zm0 6.5H21L19.5 14H3Zm0 6.5H21l-1.5 3.5H3Z");
}
</style><path class="zp0380b3j"/>`,
		"fallback": "uix-sharp:network-slicing",
	});
}

export default Component;
