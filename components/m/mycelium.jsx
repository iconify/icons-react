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
		"content": `<style>.ajhzvxk9x {
  d: path("M6.75 17.25Q9 9 17.5 6.75m-6.75 4Q8 8.5 6.25 6.25M13.5 8q3 4 4 8.5");
}

.g-8wgwf7c {
  d: path("M3.25 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm14 1a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM3.75 18.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm13-.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g-8wgwf7c"/><path class="ajhzvxk9x"/></g>`,
		"fallback": "uix-sharp:mycelium",
	});
}

export default Component;
