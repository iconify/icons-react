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
		"content": `<style>.rn37b_bzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3 21.5c0-4 3-6.25 6.5-6.25S16 17.5 16 21.5m1.25-18h3.5v6h-3.5Zm1.75 6v12");
}
</style><path class="rn37b_bzs"/>`,
		"fallback": "uix-sharp:interview-mic",
	});
}

export default Component;
