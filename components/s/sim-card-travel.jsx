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
		"content": `<style>.b27_3kbhb {
  d: path("M9 11h6v6H9Zm0 3h6");
}

.l3imynb0j {
  d: path("M6 3.5h8l4 4v13H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l3imynb0j"/><path class="b27_3kbhb"/></g>`,
		"fallback": "uix-sharp:sim-card-travel",
	});
}

export default Component;
