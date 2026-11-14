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
		"content": `<style>.fkf6qbboa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5h10v6H3Zm2.5 6V20A1.5 1.5 0 0 0 7 21.5h2.5A1.5 1.5 0 0 0 11 20v-4.5m2.906-9.381a3.5 3.5 0 0 1 2.475 2.475m-1.569-5.855a7 7 0 0 1 4.949 4.949");
}
</style><path class="fkf6qbboa"/>`,
		"fallback": "uix-sharp:off-camera-flash",
	});
}

export default Component;
