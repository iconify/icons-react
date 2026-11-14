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
		"content": `<style>.pwrn_krtb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 3.5v9.25m0 4.5v3.25m-6-17v2.25m0 4.5V20.5m-6-17v7.25m0 4.5v5.25m9.75-5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-6-7a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-6 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><path class="pwrn_krtb"/>`,
		"fallback": "uix-sharp:sliders-vertical",
	});
}

export default Component;
