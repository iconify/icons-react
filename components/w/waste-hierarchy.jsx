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
		"content": `<style>.maoansm9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 17.25l5.75-9.75m2.902-1.245l5.569 9.854m-.373 3.136l-11.319-.104M7.5 8.75l2.75-1.25l.25 3m8.513 2.603l-.292 3.006l-2.723-1.283m-6.511 6.071l-2.458-1.756l2.473-1.717");
}
</style><path class="maoansm9i"/>`,
		"fallback": "uix-sharp:waste-hierarchy",
	});
}

export default Component;
