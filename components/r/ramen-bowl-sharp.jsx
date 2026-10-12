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
		"content": `<style>.kim2mzbhl {
  d: path("m6.75 15.5l1.5 1.2l1.5-1.2l1.5-1.2l1.5 1.2l1.5 1.2l1.5-1.2c1-.8 2 .8 3 0");
}

.owmyw7x_r {
  d: path("M3.75 12h16.5l.865-.008l-.115.858a9 7.5 0 0 1-18 0l-.115-.858zm.75-9L8 12m0-9.25L10.25 12");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="owmyw7x_r"/><path class="kim2mzbhl"/></g>`,
		"fallback": "iconoven:ramen-bowl-sharp",
	});
}

export default Component;
