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
		"content": `<style>.tnosjpuna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19v7h-19Zm3.5 7V21m12-7.5V21M6 3v3.5M18 3v3.5m-9 7l2.5-7m1 7l2.5-7");
}
</style><path class="tnosjpuna"/>`,
		"fallback": "uix-sharp:maintenance-mode",
	});
}

export default Component;
