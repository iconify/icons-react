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
		"content": `<style>.tk98nsbwg {
  d: path("M2.75 6.75h8v8h-8z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xn03hdcym {
  d: path("M4.75 10.75L6.5 12.5l2.75-3m4-2.75h8v8h-8zM15.5 9l3.5 3.5M19 9l-3.5 3.5M2.75 19.25h18.5");
}
</style><g class="x2cwu0gfd"><path class="tk98nsbwg"/><path class="xn03hdcym"/></g>`,
		"fallback": "iconoven:referendum-sharp",
	});
}

export default Component;
