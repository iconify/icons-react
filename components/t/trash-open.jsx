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
		"content": `<style>.kuhogo8wt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9h13l-1 12h-11Zm-2-2.5l16.421-4.4M10 12.5v5m4-5v5");
}
</style><path class="kuhogo8wt"/>`,
		"fallback": "uix-sharp:trash-open",
	});
}

export default Component;
