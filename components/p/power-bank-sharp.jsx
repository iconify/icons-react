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
		"content": `<style>.fp8m5kchp {
  d: path("M10.5 8.75L8.25 12h3.5L9.5 15.25");
}

.gwly89btw {
  d: path("M2.75 5.75h14v12.5h-14zm14 6.25h4v9.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gwly89btw"/><path class="fp8m5kchp"/></g>`,
		"fallback": "iconoven:power-bank-sharp",
	});
}

export default Component;
