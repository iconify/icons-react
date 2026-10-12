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
		"content": `<style>.g0pmk--fc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15.25h4v6h-4zm7.25-4h4v10h-4zm7.25-2.5h4v12.5h-4zm-14 1.5L8.5 5.5l3 2.5l4.75-4.75m-2.75-.5h2.75V5.5");
}
</style><path class="g0pmk--fc"/>`,
		"fallback": "iconoven:kpi-sharp",
	});
}

export default Component;
