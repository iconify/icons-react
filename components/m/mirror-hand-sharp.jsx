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
		"content": `<style>.u5gto-b8u {
  d: path("M10.75 13.25h2.5v8h-2.5zm-2-4.75a3.25 3 0 0 1 3.25-3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysa2-oqog {
  d: path("M12 3a6 5.5 0 1 1 0 11a6 5.5 0 1 1 0-11Z");
}
</style><g class="x2cwu0gfd"><path class="ysa2-oqog"/><path class="u5gto-b8u"/></g>`,
		"fallback": "iconoven:mirror-hand-sharp",
	});
}

export default Component;
