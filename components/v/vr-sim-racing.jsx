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
		"content": `<style>.bvpx0wh1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h15a2 2 0 0 1 2 2v6.25a2 2 0 0 1-2 2H15l-1.5-2.5h-3L9 13.25H4.5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm11 16a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm0 0H21m-2.75 0v2.75");
}
</style><path class="bvpx0wh1i"/>`,
		"fallback": "uix-sharp:vr-sim-racing",
	});
}

export default Component;
