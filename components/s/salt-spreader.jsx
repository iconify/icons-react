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
		"content": `<style>.e5edfibml {
  d: path("M8 15V6a1 1 0 0 1 1-1h6.5v3.5h3l3 3V15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wouik3y4n {
  d: path("M9 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-12-5h.01M3 15.5h.01m1.99 3h.01");
}
</style><g class="ulnmmdpxh"><path class="e5edfibml"/><path class="wouik3y4n"/></g>`,
		"fallback": "uix-sharp:salt-spreader",
	});
}

export default Component;
