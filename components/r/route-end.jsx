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
		"content": `<style>.ab70fpbue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 18.5h10a3 3 0 0 0 0-6H9a3.5 3.5 0 0 1 0-7h5m3 4V3m1.379.591l.371.159a.816.816 0 0 1 0 1.5l-.371.159A.99.99 0 0 1 17 4.5a.99.99 0 0 1 1.379-.909");
}
</style><path class="ab70fpbue"/>`,
		"fallback": "uix:route-end",
	});
}

export default Component;
