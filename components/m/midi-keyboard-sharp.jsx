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
		"content": `<style>.f0e7xo-qx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.25h18.5v10H2.75zm4.65 3.5v6.5m4.6-6.5v6.5m4.6-6.5v6.5m-4.6-10V5h5.5m0-1.75h3.75v3.5H17.5z");
}
</style><path class="f0e7xo-qx"/>`,
		"fallback": "iconoven:midi-keyboard-sharp",
	});
}

export default Component;
