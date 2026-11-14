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
		"content": `<style>.a2boy5z0z {
  d: path("M12.906 20.5H3.5L12 7l3.755 5.963");
}

.nt5p5ljak {
  d: path("M2.5 12L12 3.5l9.5 8.5M12 13.5v7m6.5-6.5c2 2.25 3 3.5 3 4.75a3 3 0 0 1-6 0c0-1.25 1-2.5 3-4.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a2boy5z0z"/><path class="nt5p5ljak"/></g>`,
		"fallback": "uix-sharp:rain-fly",
	});
}

export default Component;
