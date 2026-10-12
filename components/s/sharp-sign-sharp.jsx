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
		"content": `<style>.p55nanbyn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 4v17.25m5.5-18.5V20m-9.5-9.75l13.5-3.5m-13.5 10.5l13.5-3.5");
}
</style><path class="p55nanbyn"/>`,
		"fallback": "iconoven:sharp-sign-sharp",
	});
}

export default Component;
