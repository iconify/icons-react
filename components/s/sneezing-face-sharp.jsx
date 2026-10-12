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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.vm45fobdm {
  d: path("M7.5 8.5L10 9.75L7.5 11m9-2.5L14 9.75L16.5 11M10 13.5h5l.66.75l.43.5l.66.75l-.66.75l-.43.5l-.66.75H9l-.66-.75l-.43-.5l-.66-.75l.66-.75l.43-.5l.66-.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="vm45fobdm"/></g>`,
		"fallback": "iconoven:sneezing-face-sharp",
	});
}

export default Component;
