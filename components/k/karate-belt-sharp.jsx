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
		"content": `<style>.flprtbb5k {
  d: path("M5.75 13.5h12.5v3H5.75z");
}

.o_hd59bmf {
  d: path("m9.43 3.36l2.14 3.03L12 7l.43-.61l2.14-3.03l.43-.61l.71.25l3.58 1.25l.71.25l.14.74l.97 5.02l.14.74h-3v10.25H5.75V11h-3l.14-.74l.97-5.02L4 4.5l.71-.25L8.29 3L9 2.75zM12 7l2.25 6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="o_hd59bmf"/><path class="flprtbb5k"/></g>`,
		"fallback": "iconoven:karate-belt-sharp",
	});
}

export default Component;
