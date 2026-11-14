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
		"content": `<style>.qtuyxhetg {
  d: path("M2.5 2.5h13v5h-13Zm14 8.5h5v10.5h-5ZM6.75 2.5v5m4.5-5v5m5.25 7h5m-5 3.5h5M16 5h1.25A1.75 1.75 0 0 1 19 6.75v2");
}

.t0failb8o {
  d: path("M17.25 7.25L19 9l1.75-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qtuyxhetg"/><path class="t0failb8o"/></g>`,
		"fallback": "uix-sharp:table-unpivot",
	});
}

export default Component;
