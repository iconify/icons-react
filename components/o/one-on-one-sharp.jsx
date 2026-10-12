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
		"content": `<style>.accup4bru {
  d: path("M3.5 21.25h6.75v-.75c0-1.9-1.65-3-3.75-3s-3.75 1.1-3.75 3v.75z");
}

.cuhj1i7gy {
  cx: 17.5px;
  cy: 13px;
  r: 2px;
}

.f1kz0mbum {
  d: path("M14.5 21.25h6.75v-.75c0-1.9-1.65-3-3.75-3s-3.75 1.1-3.75 3v.75zM4 2.75h6.5V7H8L6.5 8.5V7H2.75V2.75zm16 0h-6.5V7H16l1.5 1.5V7h3.75V2.75z");
}

.r4qy_xbse {
  cx: 6.5px;
  cy: 13px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="r4qy_xbse"/><path class="accup4bru"/><circle class="cuhj1i7gy"/><path class="f1kz0mbum"/></g>`,
		"fallback": "iconoven:one-on-one-sharp",
	});
}

export default Component;
