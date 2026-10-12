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
		"content": `<style>.kd2wlybli {
  d: path("M4.25 4.25h16.5l-.71.71l-7.33 7.33L12 13l-.71-.71l-7.33-7.33l-.71-.71zM12 13v8.25m-3.75 0h7.5");
}

.odpsdxyup {
  cx: 12px;
  cy: 8.25px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kd2wlybli"/><circle class="odpsdxyup"/></g>`,
		"fallback": "iconoven:martini-glass-sharp",
	});
}

export default Component;
