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
		"content": `<style>.nwiq513ij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v17h17m-13-3V13m3.5 4.5v-11m3.5 11V11m3.5 6.5V15");
}
</style><path class="nwiq513ij"/>`,
		"fallback": "uix-sharp:mass-spectrum",
	});
}

export default Component;
