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
		"content": `<style>.anjaqzb1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5.5h9v6h-9ZM5 5.5l7-3l7 3m-10.5 6l-2 9.5m9-9.5l2 9.5m-10-5h9");
}
</style><path class="anjaqzb1l"/>`,
		"fallback": "uix-sharp:lifeguard-tower",
	});
}

export default Component;
