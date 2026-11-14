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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v31to1nbr {
  d: path("M3.5 17.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-7-7.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.x5lxgdb9t {
  d: path("M2.5 9v6.25h19");
}

.xgiv-ht4k {
  d: path("M6.25 9.5a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="xgiv-ht4k"/><path class="x5lxgdb9t"/><path class="v31to1nbr"/></g>`,
		"fallback": "uix-sharp:tyre-trolley",
	});
}

export default Component;
