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
		"content": `<style>.uj1h7abtf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.65V17.5h6v-3.75h6V10h6.5v11.25H2.75zm3-3.15v-5.25m6 1.5V9m6 1V5.75m-14 7.58l16-8.66");
}
</style><path class="uj1h7abtf"/>`,
		"fallback": "iconoven:staircase-sharp",
	});
}

export default Component;
