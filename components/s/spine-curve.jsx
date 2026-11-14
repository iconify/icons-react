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
		"content": `<style>.n3c4seb9x {
  d: path("M12 4c3 2.5 3 5 0 8s-3 5.5 0 8m.25-13.5h2.25M11.75 10H14m-4 4h2.25m-2 3.5h2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zoej7biec {
  d: path("M9.5 2.5c0 1.75-1.25 2.5-3 3L5 6c-1.25.5-1.75 1.25-1.5 2.5l2.25 5c.25 1-.5 4-.5 8h13.5c0-4-.75-7-.5-8l2.25-5c.25-1.25-.25-2-1.5-2.5l-1.5-.5c-1.75-.5-3-1.25-3-3");
}
</style><g class="ulnmmdpxh"><path class="zoej7biec"/><path class="n3c4seb9x"/></g>`,
		"fallback": "uix-sharp:spine-curve",
	});
}

export default Component;
