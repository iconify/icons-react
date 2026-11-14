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
		"content": `<style>.cb2-z2d7j {
  fill: currentColor;
  d: path("M6.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7.25-1.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM12 15.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="cb2-z2d7j"/></g>`,
		"fallback": "uix-sharp:microbe-plate-colonies",
	});
}

export default Component;
