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
		"content": `<style>.in0dy56uk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20C3 10 6.5 3 12 3s9 7 9 17h-4.5c0-8-2-12.5-4.5-12.5S7.5 12 7.5 20Zm9-17v4.5m-6.5.25l3.25 3m9.75-3l-3.25 3");
}
</style><path class="in0dy56uk"/>`,
		"fallback": "uix-sharp:teeth-arch-upper",
	});
}

export default Component;
