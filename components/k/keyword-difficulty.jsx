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
		"content": `<style>.i87ak3cbg {
  d: path("M11 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.uaqdvgble {
  d: path("M3 16a9 9 0 0 1 18 0m-9 0l4.5-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uaqdvgble"/><path class="i87ak3cbg"/></g>`,
		"fallback": "uix-sharp:keyword-difficulty",
	});
}

export default Component;
