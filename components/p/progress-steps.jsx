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
		"content": `<style>.lxkt8-f8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0H10m0 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h3.5m0 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="lxkt8-f8r"/>`,
		"fallback": "uix-sharp:progress-steps",
	});
}

export default Component;
