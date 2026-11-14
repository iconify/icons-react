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
		"content": `<style>.hpstaobxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h19v14h-19Zm4 0V5.5A2.5 2.5 0 0 1 9 3h6a2.5 2.5 0 0 1 2.5 2.5V7m-8 4v6m5-6v6");
}
</style><path class="hpstaobxp"/>`,
		"fallback": "uix-sharp:pet-carrier",
	});
}

export default Component;
