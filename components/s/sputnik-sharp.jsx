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
		"content": `<style>.idplblmkl {
  d: path("M3.25 8.5a5.25 2 0 0 0 10.5 0m-.14 1.2l7.64 1.8m-9.04.71L19 19m-9.3-5.39l1.8 7.64");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysgoz85np {
  cx: 8.5px;
  cy: 8.5px;
  r: 5.25px;
}
</style><g class="x2cwu0gfd"><circle class="ysgoz85np"/><path class="idplblmkl"/></g>`,
		"fallback": "iconoven:sputnik-sharp",
	});
}

export default Component;
