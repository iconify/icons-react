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
		"content": `<style>.d4sb11f1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h6.5l1 5L14 9.25a2 2 0 0 1 1.5 2v2.25H3Zm2 10.5v3m7-3v3m-9.5 0h10.8m4.2-.5h4v5.5h-4L15 18.75Zm.5 2.75h.01");
}
</style><path class="d4sb11f1f"/>`,
		"fallback": "uix-sharp:skate-rental",
	});
}

export default Component;
