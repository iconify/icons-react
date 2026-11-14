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
		"content": `<style>.cirlnmbvm {
  d: path("M10.25 16.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xn-8mg1bs {
  d: path("M7 16.25a5 5 0 1 0 10 0a5 5 0 1 0-10 0ZM8 8.5q1.25-1.5 0-3t0-3m4 6q1.25-1.5 0-3t0-3m4 6q1.25-1.5 0-3t0-3");
}
</style><g class="ulnmmdpxh"><path class="xn-8mg1bs"/><path class="cirlnmbvm"/></g>`,
		"fallback": "uix-sharp:radon-sensor",
	});
}

export default Component;
