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
		"content": `<style>.sy4dngbcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M5.75 8h12.5m-9.5 4h10.5m-9.5 4h6M9 20h2.5");
}
</style><path class="sy4dngbcb"/>`,
		"fallback": "iconoven:tornado-warning-sharp",
	});
}

export default Component;
