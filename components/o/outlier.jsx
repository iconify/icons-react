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
		"content": `<style>.kik17mp7i {
  fill: currentColor;
  d: path("M16.25 6.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.lxws5r63t {
  fill: currentColor;
  d: path("M3.25 14a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM7 13a1.25 1.25 0 1 0 2.5 0A1.25 1.25 0 1 0 7 13Zm-2 4.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm3.75-.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-6 3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM7 20.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.my2wapihz {
  d: path("M14.25 6.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kik17mp7i"/><path class="my2wapihz"/><path class="lxws5r63t"/></g>`,
		"fallback": "uix-sharp:outlier",
	});
}

export default Component;
