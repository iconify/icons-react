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
		"content": `<style>.t77_dpr5q {
  d: path("M3.75 2.75h16.5v18.5H3.75zm3.5 0v18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yce3cuw3r {
  d: path("M10.25 7.25h6.5v6h-6.5zm0 9.75h6.5");
}
</style><g class="x2cwu0gfd"><path class="t77_dpr5q"/><path class="yce3cuw3r"/></g>`,
		"fallback": "iconoven:photo-corners-sharp",
	});
}

export default Component;
