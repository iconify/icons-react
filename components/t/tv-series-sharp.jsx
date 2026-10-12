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
		"content": `<style>.atdektbnf {
  d: path("M6.75 4.75h14.5v10.5M5.25 13h1.5m3 0h1.5m3 0h1.5");
}

.fkvi9krra {
  d: path("M2.75 7.75h15.5v10.5H2.75zm4.75 13.5h6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fkvi9krra"/><path class="atdektbnf"/></g>`,
		"fallback": "iconoven:tv-series-sharp",
	});
}

export default Component;
