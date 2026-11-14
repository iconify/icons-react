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
		"content": `<style>.ve4lyacng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8a3.75 3.75 0 0 1 7.5 0c0 2.5-2 4-7.5 11.5h7.5m3-8l6 6m0-6l-6 6");
}
</style><path class="ve4lyacng"/>`,
		"fallback": "uix-sharp:playback-2x",
	});
}

export default Component;
