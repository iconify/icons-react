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
		"content": `<style>.f3uoymbcj {
  d: path("M2.75 12H8m6.25 0h7m-8-2.5L16 6h5.25m-8 8.5L16 18h5.25M19.5 4.25L21.25 6L19.5 7.75m0 2.5L21.25 12l-1.75 1.75m0 2.5L21.25 18l-1.75 1.75");
}

.nsu12ob8g {
  cx: 11.25px;
  cy: 12px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f3uoymbcj"/><circle class="nsu12ob8g"/></g>`,
		"fallback": "iconoven:model-router-sharp",
	});
}

export default Component;
