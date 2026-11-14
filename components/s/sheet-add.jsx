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
		"content": `<style>.ld4--hngo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19v11h-19Zm6.25 0v11m6.5-11v11M2.5 8h19m-19 8h14m-13 0l.75 4.5H8l.75-4.5m1.5 0l.75 4.5h3.75l.75-4.5m4-.25v5m-2.5-2.5h5");
}
</style><path class="ld4--hngo"/>`,
		"fallback": "uix-sharp:sheet-add",
	});
}

export default Component;
