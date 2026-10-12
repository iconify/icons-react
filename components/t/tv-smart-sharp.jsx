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
		"content": `<style>.l6y_2qqgo {
  d: path("M2.75 3.75h18.5v13.5H2.75zM7 17.25l-1.25 4m11.25-4l1.25 4");
}

.nluct8bsw {
  d: path("M10.5 8.25v4.5l3.75-2.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l6y_2qqgo"/><path class="nluct8bsw"/></g>`,
		"fallback": "iconoven:tv-smart-sharp",
	});
}

export default Component;
