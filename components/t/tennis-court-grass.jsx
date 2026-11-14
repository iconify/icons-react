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
		"content": `<style>.l600e1ikp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11l4 10.5h-19Zm9 19q0-3-1.5-5.25m4.25 5.25v-5.75M21 21.5q0-3 1-5.25M4.5 7.75h15M12 2.5V13");
}
</style><path class="l600e1ikp"/>`,
		"fallback": "uix-sharp:tennis-court-grass",
	});
}

export default Component;
