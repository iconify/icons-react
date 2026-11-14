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
		"content": `<style>.ai2bfy3sv {
  d: path("M5 3.5h14A1.5 1.5 0 0 1 20.5 5v14a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Z");
}

.n2bic0nje {
  d: path("m10 6.25l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vx09w6baa {
  d: path("M15.897 10.5A4.5 4.5 0 1 1 12 8.25");
}
</style><g class="ulnmmdpxh"><path class="ai2bfy3sv"/><path class="vx09w6baa"/><path class="n2bic0nje"/></g>`,
		"fallback": "uix-sharp:rotate-cw-square",
	});
}

export default Component;
