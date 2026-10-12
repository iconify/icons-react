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
		"content": `<style>.c7ctqnbzi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8.75h.01m5.49-2h.01M16 10h.01");
}

.ulqzijnen {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 11.5a8.75 8 0 0 1 17.5 0v1.25H3.25zM9 15h6l.5 4.5l.3 1.775l-1.8-.025h-4l-1.8.025l.3-1.775Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ulqzijnen"/><path class="c7ctqnbzi"/></g>`,
		"fallback": "iconoven:mushroom-sharp",
	});
}

export default Component;
