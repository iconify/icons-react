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
		"content": `<style>.b2caznbkb {
  d: path("M11 11.25h7v7.5h-7zM18 13l2.5 2M11 13l-2-1.75m2 5.25c-1.5 0-2.5 1-4.25 1");
}

.lbbj3sidx {
  cx: 4.75px;
  cy: 17.5px;
  r: 2px;
}

.w09f2snjy {
  cx: 14.5px;
  cy: 5.75px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w09f2snjy"/><path class="b2caznbkb"/><circle class="lbbj3sidx"/></g>`,
		"fallback": "iconoven:space-walk-sharp",
	});
}

export default Component;
