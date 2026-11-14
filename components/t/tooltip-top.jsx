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
		"content": `<style>.ee1-qabot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5a2 2 0 0 1 2-2h5l2.5-4l2.5 4h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Zm6 4h7");
}
</style><path class="ee1-qabot"/>`,
		"fallback": "uix-sharp:tooltip-top",
	});
}

export default Component;
