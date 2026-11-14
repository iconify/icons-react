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
		"content": `<style>.of95kqb6k {
  d: path("M5.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10-5h6m-6 5h4m-4 5H18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vni3pi4oq {
  d: path("M2.5 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}
</style><g class="ulnmmdpxh"><path class="vni3pi4oq"/><path class="of95kqb6k"/></g>`,
		"fallback": "uix-sharp:okr",
	});
}

export default Component;
