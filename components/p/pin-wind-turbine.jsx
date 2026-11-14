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
		"content": `<style>.j2s0pac6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM12 10v11.5m-3 0h6M12 7V2.5m-1.25 6.75l-4 2.25m6.5-2.25l4 2.25");
}
</style><path class="j2s0pac6f"/>`,
		"fallback": "uix-sharp:pin-wind-turbine",
	});
}

export default Component;
