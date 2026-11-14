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
		"content": `<style>.mpr8f4bnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm1 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM9 5.5L5 9.75l2.5 6.75v5m7.5-16l4 4.25l-2.5 6.75v5");
}
</style><path class="mpr8f4bnv"/>`,
		"fallback": "uix-sharp:throw-in",
	});
}

export default Component;
