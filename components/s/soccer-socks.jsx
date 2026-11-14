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
		"content": `<style>.sooja-0ep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 2.5h4V14L10 16.5a2.25 2.25 0 0 1-1.5 4H6.25a3 3 0 0 1-3-3Zm10.5 0h4V14l2.75 2.5a2.25 2.25 0 0 1-1.5 4h-2.25a3 3 0 0 1-3-3ZM3.25 6h4m6.5 0h4");
}
</style><path class="sooja-0ep"/>`,
		"fallback": "uix-sharp:soccer-socks",
	});
}

export default Component;
