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
		"content": `<style>.ljcdbxvgq {
  d: path("M7 7h14v14H7Z");
}

.mpf6no7ir {
  d: path("M3 16V5a2 2 0 0 1 2-2h11m-2 7.5v7M10.5 14h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ljcdbxvgq"/><path class="mpf6no7ir"/></g>`,
		"fallback": "uix-sharp:queue-add",
	});
}

export default Component;
