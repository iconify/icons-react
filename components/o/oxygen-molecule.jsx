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
		"content": `<style>.d5ghdhbbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm9 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm-2.25-1.75h4.5m-4.5 3.5h4.5");
}
</style><path class="d5ghdhbbd"/>`,
		"fallback": "uix-sharp:oxygen-molecule",
	});
}

export default Component;
