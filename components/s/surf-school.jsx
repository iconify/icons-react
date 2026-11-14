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
		"content": `<style>.pu3mdh-vy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 19c-1-6-.5-13 3.25-16.5c2.72 2.539 3.731 6.92 3.698 11.425M2.5 19h9.7M9 8v6.5m6 1.5c1.25-.5 2.5-.5 3.5.5c1-1 2.25-1 3.5-.5v5c-1.25-.5-2.5-.5-3.5.5c-1-1-2.25-1-3.5-.5Zm3.5.5v5");
}
</style><path class="pu3mdh-vy"/>`,
		"fallback": "uix-sharp:surf-school",
	});
}

export default Component;
