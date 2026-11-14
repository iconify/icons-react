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
		"content": `<style>.krsibmlfn {
  d: path("M3.5 10h9v9h-9ZM8 5a9.5 9.5 0 0 1 9.5 9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vei8xtc9f {
  d: path("m14.75 11.75l2.75 2.75l2.75-2.75");
}
</style><g class="ulnmmdpxh"><path class="krsibmlfn"/><path class="vei8xtc9f"/></g>`,
		"fallback": "uix-sharp:rotate-90-cw",
	});
}

export default Component;
