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
		"content": `<style>.a2gp2ek2z {
  d: path("M10.5 8c0 3.5-2 4.5-2 7.5c0 2.5-2 3.5-2.5 5h12c-.5-1.5-2.5-2.5-2.5-5c0-3-2-4-2-7.5M9 5a1.5 1.5 0 0 1 3-1a1.5 1.5 0 0 1 3 1");
}

.janwq29et {
  d: path("M2.5 20.5L9 8h6l6.5 12.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="janwq29et"/><path class="a2gp2ek2z"/></g>`,
		"fallback": "uix-sharp:lava-flow",
	});
}

export default Component;
