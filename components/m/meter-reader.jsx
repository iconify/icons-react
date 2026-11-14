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
		"content": `<style>.eil9nacdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0ZM8 9l2.75-2.75m5 6.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-2.25 9c0-2.5 2-4 4.5-4s4 1.5 4 4");
}
</style><path class="eil9nacdn"/>`,
		"fallback": "uix-sharp:meter-reader",
	});
}

export default Component;
