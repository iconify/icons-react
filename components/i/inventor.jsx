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
		"content": `<style>.byan2mbcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 17.75c0-2-2.5-3-2.5-5.75a4.75 4.75 0 0 1 9.5 0c0 2.75-2.5 3.75-2.5 5.75Zm.25 3h4M12 2.5v2m-6.75.75l1.5 1.5m12-1.5l-1.5 1.5");
}
</style><path class="byan2mbcj"/>`,
		"fallback": "uix-sharp:inventor",
	});
}

export default Component;
