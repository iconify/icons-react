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
		"content": `<style>.cm74gksqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17q9.5-2.5 19 0M6 20.5h12m-6-17v9M8 5.75l8 4.5m-8 0l8-4.5");
}
</style><path class="cm74gksqx"/>`,
		"fallback": "uix-sharp:snowfield",
	});
}

export default Component;
