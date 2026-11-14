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
		"content": `<style>.d44ewnbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5h12v7h-12Zm14.5-1a6.5 6.5 0 0 1 0 9M7 12h.01");
}
</style><path class="d44ewnbry"/>`,
		"fallback": "uix-sharp:timing-transponder",
	});
}

export default Component;
