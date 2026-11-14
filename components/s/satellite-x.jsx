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
		"content": `<style>.mrrj_4b-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.934 10.116l3.182-3.182l4.95 4.95l-3.182 3.182Zm-4.066 5.48l2.829-2.828l3.535 3.535l-2.828 2.829Zm9.9-9.899l2.828-2.829l3.536 3.536l-2.829 2.828Zm-5.304 8.839l1.945-1.945m3.182-3.182l1.945-1.945M15.5 15.5l5 5m0-5l-5 5");
}
</style><path class="mrrj_4b-b"/>`,
		"fallback": "uix-sharp:satellite-x",
	});
}

export default Component;
