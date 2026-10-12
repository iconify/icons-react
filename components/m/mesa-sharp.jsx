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
		"content": `<style>.pnlbaejag {
  cx: 18.75px;
  cy: 4.75px;
  r: 2px;
}

.we81zftwr {
  d: path("m6.62 20.46l.51-3.17l.12-.79l.63-.37l.62-.38l.06-.8l.38-5.65l.06-.8h6l.09.79l.32 2.67l.09.79l.63.38l.62.37l.08.8l.59 6.15l.08.8h-11zM8.8 12h2.7m-1 5.75H15m-12.25 3.5h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="we81zftwr"/><circle class="pnlbaejag"/></g>`,
		"fallback": "iconoven:mesa-sharp",
	});
}

export default Component;
