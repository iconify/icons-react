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
		"content": `<style>.pneh-xn1d {
  cx: 7.25px;
  cy: 8.25px;
  r: 1.5px;
}

.tyhetpb4e {
  cx: 12px;
  cy: 18.75px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqtonkbly {
  d: path("M12 16.5V3.25M9.75 5.5L12 3.25l2.25 2.25m-2.25 9l-4.75-2.75v-2m4.75 2.5l4.75-2.5V8");
}

.yui-xd_nw {
  d: path("M15.5 5.5H18V8h-2.5z");
}
</style><g class="x2cwu0gfd"><circle class="tyhetpb4e"/><path class="yqtonkbly"/><circle class="pneh-xn1d"/><path class="yui-xd_nw"/></g>`,
		"fallback": "iconoven:usb-hub-sharp",
	});
}

export default Component;
