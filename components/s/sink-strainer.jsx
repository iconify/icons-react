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
		"content": `<style>.k904vm21i {
  d: path("M10.25 6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm5.5 5.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-5.5 5.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM4.75 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 12h.01");
}

.rh4hqugip {
  d: path("M2 12a10 10 0 1 0 20 0a10 10 0 1 0-20 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rh4hqugip"/><path class="k904vm21i"/></g>`,
		"fallback": "uix-sharp:sink-strainer",
	});
}

export default Component;
