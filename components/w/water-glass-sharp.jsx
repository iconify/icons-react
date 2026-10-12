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
		"content": `<style>.a1ceucbha {
  d: path("m7.5 9.5l2.25-1.125L12 9.5l2.25 1.125L16.5 9.5");
}

.l9tu3cb2x {
  d: path("M5.25 3.25h13.5L17 19.5l-.222 1.764L15 21.25H9l-1.778.014L7 19.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l9tu3cb2x"/><path class="a1ceucbha"/></g>`,
		"fallback": "iconoven:water-glass-sharp",
	});
}

export default Component;
