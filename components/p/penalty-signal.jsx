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
		"content": `<style>.k17r1zlnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM3 21.5V15c0-2.25 2-3.75 5-3.75c1.75 0 2.75.5 3.5 1.25l7 4.75m-7-4.75c1 1 1.5 1.5 1.5 3v6m7.5-.5h.01");
}
</style><path class="k17r1zlnc"/>`,
		"fallback": "uix-sharp:penalty-signal",
	});
}

export default Component;
