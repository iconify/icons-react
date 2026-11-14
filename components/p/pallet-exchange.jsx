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
		"content": `<style>.x9-phgbsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h9m-9 4.5h9M3 4v4.5M7 4v4.5M11 4v4.5m1.5 8h9m-9 4.5h9M13 16.5V21m4-4.5V21m4-4.5V21M14.5 5.25c3 0 5 2.25 5 5.75m-2-1.5l2 2l2-2m-12 9.25c-3 0-5-2.25-5-5.75m-2 1.5l2-2l2 2");
}
</style><path class="x9-phgbsd"/>`,
		"fallback": "uix-sharp:pallet-exchange",
	});
}

export default Component;
