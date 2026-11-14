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
		"content": `<style>.qlrtp2b0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5v17m18-17v17M7 12h10m-3.5-3.5L17 12l-3.5 3.5");
}
</style><path class="qlrtp2b0c"/>`,
		"fallback": "uix-sharp:pipe-command",
	});
}

export default Component;
