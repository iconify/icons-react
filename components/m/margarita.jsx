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
		"content": `<style>.o62csxcvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19c0 4-4.5 6-9.5 6s-9.5-2-9.5-6Zm9.5 6v8m-4 0h8m-.5-14a3 3 0 0 1 6 0");
}
</style><path class="o62csxcvl"/>`,
		"fallback": "uix-sharp:margarita",
	});
}

export default Component;
