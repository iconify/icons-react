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
		"content": `<style>.qfz_wacxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19m-19 11.5h19M3.75 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6 19.75h11.5m-2-2l2 2l-2 2");
}
</style><path class="qfz_wacxd"/>`,
		"fallback": "uix-sharp:red-blood-cells-flow",
	});
}

export default Component;
