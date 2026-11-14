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
		"content": `<style>.boemvuscg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.75h19v4h-19Zm0-6.75h11v4h-11Zm13.75 0h5.25v4h-5.25Zm-11-6.75h6v4h-6Z");
}
</style><path class="boemvuscg"/>`,
		"fallback": "uix-sharp:profiler",
	});
}

export default Component;
