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
		"content": `<style>.ekwj1i_0m {
  cx: 17px;
  cy: 17px;
  r: 2.75px;
}

.fyjv9jblo {
  d: path("m18.75 5.25l-13.5 13.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4edlk8up {
  cx: 7px;
  cy: 7px;
  r: 2.75px;
}
</style><g class="x2cwu0gfd"><circle class="y4edlk8up"/><circle class="ekwj1i_0m"/><path class="fyjv9jblo"/></g>`,
		"fallback": "iconoven:percent-sharp",
	});
}

export default Component;
