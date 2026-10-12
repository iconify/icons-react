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

.o4z5kmbus {
  d: path("m15.5 8.5l-7 7");
}

.uadx0728c {
  cx: 9.25px;
  cy: 9.25px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnt5zf0il {
  cx: 14.75px;
  cy: 14.75px;
  r: 1.5px;
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><circle class="uadx0728c"/><circle class="xnt5zf0il"/><path class="o4z5kmbus"/></g>`,
		"fallback": "iconoven:interest-rate-sharp",
	});
}

export default Component;
