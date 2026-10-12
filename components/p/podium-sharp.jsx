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
		"content": `<style>.dhalwcbhj {
  d: path("M2.75 21.25V11.5h6V4.75h6.5v9H21v7.5Z");
}

.sn2fxebfr {
  d: path("m11 9l1.25-1v5.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dhalwcbhj"/><path class="sn2fxebfr"/></g>`,
		"fallback": "iconoven:podium-sharp",
	});
}

export default Component;
