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
		"content": `<style>.nsc1_6b6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19M5 11h14v9H5ZM3.5 6C6 3.5 9.5 3.5 12 6s6 2.5 8.5 0m-12 8v3m3.5-3v3m3.5-3v3");
}
</style><path class="nsc1_6b6i"/>`,
		"fallback": "uix-sharp:storm-drain",
	});
}

export default Component;
