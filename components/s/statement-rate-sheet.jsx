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
		"content": `<style>.podmv7j6w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v18h-19Zm11 0v18M2.5 9h19m-19 6h19m-16-9h5m-5 6h5m-5 6h5M16 7.25l3-2.5M16.25 5h.01m2.49 2h.01M16 12h3m-3 6h3");
}
</style><path class="podmv7j6w"/>`,
		"fallback": "uix-sharp:statement-rate-sheet",
	});
}

export default Component;
