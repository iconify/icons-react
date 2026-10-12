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
		"content": `<style>.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.myuvscn1x {
  d: path("M9 8.25H7.25v2.5l-1 1.25l1 1.25v2.5H9m6-7.5h1.75v2.5l1 1.25l-1 1.25v2.5H15M10.75 12h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="myuvscn1x"/></g>`,
		"fallback": "iconoven:prompt-template-sharp",
	});
}

export default Component;
