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
		"content": `<style>.f_ac1f42b {
  d: path("M2.75 14.5h6.5v-8a2.75 2.75 0 0 1 5.5 0V14h1.5m2.5 0h2.5");
}

.lgpakg6ky {
  d: path("M2.75 7.5H6.5V13m.37 3a5.5 5.5 0 0 0 10.63-2V8h3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="f_ac1f42b"/><path class="lgpakg6ky"/></g>`,
		"fallback": "iconoven:knot-sailor-sharp",
	});
}

export default Component;
