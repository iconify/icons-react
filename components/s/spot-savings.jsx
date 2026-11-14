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
		"content": `<style>.vz1m8y6ql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 12.5l10-10m-11.5 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-2.5 5v6m-3-3l3 3l3-3");
}
</style><path class="vz1m8y6ql"/>`,
		"fallback": "uix-sharp:spot-savings",
	});
}

export default Component;
