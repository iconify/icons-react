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
		"content": `<style>.vxp615b0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19a7 2 0 1 0 14 0a7 2 0 1 0-14 0Zm6-16v16m0-16l7 3l-7 3Z");
}
</style><path class="vxp615b0v"/>`,
		"fallback": "uix-sharp:mini-golf",
	});
}

export default Component;
