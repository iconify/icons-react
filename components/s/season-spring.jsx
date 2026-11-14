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
		"content": `<style>.ovzjaq1xq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 5.75a2 2 0 1 1 1 3a2 2 0 1 1-2.5 2a2 2 0 1 1-2.5-2a2 2 0 1 1 1-3a2 2 0 1 1 3 0Zm-1.5 5V21.5m0-3.5c1.5-3 4.5-3.75 6.25-3c-.75 2.5-3.25 4-6.25 3Zm0-9.75h.01");
}
</style><path class="ovzjaq1xq"/>`,
		"fallback": "uix-sharp:season-spring",
	});
}

export default Component;
