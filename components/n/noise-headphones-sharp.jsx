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
		"content": `<style>.htcq9pd-b {
  d: path("M2.75 12.25h5v8.5h-5zm13.5 0h5v8.5h-5zM10 14.5l4 4m0-4l-4 4");
}

.pdoozcciw {
  d: path("M4.75 13v-2a7.25 7.25 0 0 1 14.5 0v2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pdoozcciw"/><path class="htcq9pd-b"/></g>`,
		"fallback": "iconoven:noise-headphones-sharp",
	});
}

export default Component;
