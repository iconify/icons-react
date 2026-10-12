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
		"content": `<style>.ptecjnn7n {
  d: path("m18.34 14.4l1.06-1.06l.53-.53l-.53-.53l-3.18-3.18l-.53-.53l-.53.53l-1.06 1.06l-.53.53l.53.53l3.18 3.18l.53.53zm-.14-4.1l2.55-2.55");
}

.tv9hpcfju {
  d: path("M2.75 2.75h12.5v18.5H2.75zM6 7h6m-6 3.25h4m-4 7.5h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tv9hpcfju"/><path class="ptecjnn7n"/></g>`,
		"fallback": "iconoven:verdict-sharp",
	});
}

export default Component;
