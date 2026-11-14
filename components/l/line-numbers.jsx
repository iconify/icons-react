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
		"content": `<style>.nu38jgbvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5L5 3v6.5M3 14a2 2 0 1 1 3.5 1.5l-3.5 5h4m2.5-18v19m3-16h8m-8 6.5h6m-6 6.5H20");
}
</style><path class="nu38jgbvl"/>`,
		"fallback": "uix-sharp:line-numbers",
	});
}

export default Component;
