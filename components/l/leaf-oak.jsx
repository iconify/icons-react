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
		"content": `<style>.c13452bae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 6.5a2.5 2.5 0 1 1 1 4.5a2.5 2.5 0 1 1-1 4.5l-1.5 2l-1.5-2a2.5 2.5 0 1 1-1-4.5a2.5 2.5 0 1 1 1-4.5a2.5 2.5 0 1 1 3 0ZM12 5v16.5");
}
</style><path class="c13452bae"/>`,
		"fallback": "uix-sharp:leaf-oak",
	});
}

export default Component;
